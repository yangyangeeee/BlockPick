package com.blockpick.backend.domain.recommend;

import com.blockpick.backend.domain.alley.Alley;
import com.blockpick.backend.domain.alley.AlleyRepository;
import com.blockpick.backend.domain.recommend.dto.RecommendRequest;
import com.blockpick.backend.domain.recommend.dto.RecommendResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecommendService {

    private final AlleyRepository alleyRepository;

    public RecommendResponse recommend(RecommendRequest req) {
        List<Alley> candidates = loadCandidates(req.getPreferredRegion());

        // priorities 기반 가중치 생성
        Map<String, Double> w = buildWeights(req.getPriorities());

        // 운영형태/예산 보정
        applyAdjustments(w, req.getOperationType(), req.getBudgetRange());

        // 점수 계산 + reason 생성
        List<Scored> scored = candidates.stream()
                .map(a -> scoreOne(a, w))
                .sorted(Comparator.comparingInt(Scored::score).reversed())
                .limit(5)
                .toList();

        // ✅ (1) 결과 페이지 상단에 보여줄 조건(criteria)
        RecommendResponse.Criteria criteria = new RecommendResponse.Criteria(
                safe(req.getIndustry()),
                safe(req.getBudgetRange()),
                safe(req.getPreferredRegion()),
                safe(req.getOperationType())
        );

        // ✅ (2) 카드 리스트(items): rank + 카드 상세 데이터 포함
        List<RecommendResponse.RecommendItem> items = new ArrayList<>();
        for (int i = 0; i < scored.size(); i++) {
            Scored s = scored.get(i);
            Alley a = s.alley();

            RecommendResponse.FootTraffic ft = new RecommendResponse.FootTraffic(
                    "유동 인구",
                    a.getWeekdayFootTraffic(),
                    a.getWeekendFootTraffic()
            );

            RecommendResponse.Competition comp = new RecommendResponse.Competition(
                    "경쟁도",
                    toCompetitionLevel(a.getCompetitorCount()),
                    a.getCompetitorCount()
            );

            List<String> tags = List.of(a.getTag1(), a.getTag2(), a.getTag3()).stream()
                    .filter(t -> t != null && !t.isBlank())
                    .toList();

            String reason = buildCardReason(req, a, s.reason());

            items.add(new RecommendResponse.RecommendItem(
                    i + 1,                 // rank
                    a.getId(),              // alleyId
                    a.getName(),            // name
                    s.score(),              // score
                    a.getSummary(),         // summary
                    reason,                 // reason (조금 더 설명형)
                    a.getImageUrl(),        // imageUrl
                    ft,                     // footTraffic
                    comp,                   // competition
                    tags                    // tags
            ));
        }

        return new RecommendResponse(criteria, items);
    }

    private List<Alley> loadCandidates(String preferredRegion) {
        if (preferredRegion == null || preferredRegion.isBlank()) {
            return alleyRepository.findAll();
        }
        List<Alley> inRegion = alleyRepository.findByRegionContainingIgnoreCase(preferredRegion.trim());
        return inRegion.isEmpty() ? alleyRepository.findAll() : inRegion;
    }

    private Map<String, Double> buildWeights(List<String> priorities) {
        // 기본 가중치 (합 1.0 근처)
        Map<String, Double> w = new HashMap<>();
        w.put("유동인구", 0.30);
        w.put("접근성", 0.25);
        w.put("임대료수준", 0.20);
        w.put("경쟁업종수", 0.15);
        w.put("분위기/이미지", 0.10);

        if (priorities == null || priorities.isEmpty()) return w;

        // 사용자가 고른 우선순위가 있으면 상위에 보너스
        double[] bonus = {0.08, 0.05, 0.03};
        for (int i = 0; i < Math.min(3, priorities.size()); i++) {
            String key = priorities.get(i);
            if (w.containsKey(key)) w.put(key, w.get(key) + bonus[i]);
        }

        // 정규화(총합 1.0)
        double sum = w.values().stream().mapToDouble(Double::doubleValue).sum();
        w.replaceAll((k, v) -> v / sum);

        return w;
    }

    private void applyAdjustments(Map<String, Double> w, String operationType, String budgetRange) {
        if (operationType != null) {
            String op = operationType.trim();
            if (op.contains("팝업")) {
                // 단기: 임대료/분위기 조금 더
                bump(w, "임대료수준", 0.03);
                bump(w, "분위기/이미지", 0.02);
            } else if (op.contains("정식")) {
                // 장기: 접근성/경쟁 중요
                bump(w, "접근성", 0.03);
                bump(w, "경쟁업종수", 0.02);
            }
        }

        if (budgetRange != null) {
            String b = budgetRange.trim();
            // 예산 낮으면 임대료 더 중요하게
            if (b.contains("~") || b.contains("이하") || b.contains("1000") || b.contains("2000")) {
                bump(w, "임대료수준", 0.03);
            }
        }

        // 다시 정규화
        double sum = w.values().stream().mapToDouble(Double::doubleValue).sum();
        w.replaceAll((k, v) -> v / sum);
    }

    private void bump(Map<String, Double> w, String key, double delta) {
        if (!w.containsKey(key)) return;
        w.put(key, w.get(key) + delta);
    }

    private Scored scoreOne(Alley a, Map<String, Double> w) {
        // 각 feature는 0~100
        double s =
                a.getFootTrafficScore() * w.getOrDefault("유동인구", 0.0) +
                a.getAccessScore() * w.getOrDefault("접근성", 0.0) +
                a.getRentLevelScore() * w.getOrDefault("임대료수준", 0.0) +
                a.getCompetitionScore() * w.getOrDefault("경쟁업종수", 0.0) +
                a.getMoodScore() * w.getOrDefault("분위기/이미지", 0.0);

        int score = (int) Math.round(s);

        // reason: 기여 큰 상위 2개 요인 뽑아 문장 생성
        Map<String, Integer> factors = new LinkedHashMap<>();
        factors.put("유동인구", a.getFootTrafficScore());
        factors.put("접근성", a.getAccessScore());
        factors.put("임대료수준", a.getRentLevelScore());
        factors.put("경쟁업종수", a.getCompetitionScore());
        factors.put("분위기/이미지", a.getMoodScore());

        List<String> top2 = factors.entrySet().stream()
                .sorted((e1, e2) -> Double.compare(
                        e2.getValue() * w.getOrDefault(e2.getKey(), 0.0),
                        e1.getValue() * w.getOrDefault(e1.getKey(), 0.0)
                ))
                .limit(2)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        String reason = buildReason(top2);

        return new Scored(a, score, reason);
    }

    private String buildReason(List<String> top2) {
        if (top2 == null || top2.isEmpty()) return "종합 점수가 높은 상권이에요";
        if (top2.size() == 1) return top2.get(0) + " 측면에서 조건에 잘 맞아요";

        String a = top2.get(0);
        String b = top2.get(1);

        if (a.equals("유동인구") && b.equals("접근성")) return "유동인구와 접근성이 좋아 초반 유입에 유리해요";
        if (a.equals("임대료수준")) return "임대료 부담을 줄이면서 운영하기 좋은 편이에요";
        if (a.equals("경쟁업종수")) return "경쟁 강도가 상대적으로 낮아 안정적으로 시작하기 좋아요";
        if (a.equals("분위기/이미지")) return "상권 분위기와 이미지가 업종 콘셉트에 잘 맞을 가능성이 높아요";

        return a + " / " + b + " 기준에서 점수가 높게 나왔어요";
    }

    // ------------------------------
    // ✅ 아래는 결과페이지용 “카드 확장” 유틸
    // ------------------------------

    private String safe(String v) {
        return (v == null) ? "" : v.trim();
    }

    private String toCompetitionLevel(int competitorCount) {
        if (competitorCount <= 8) return "낮음";
        if (competitorCount <= 15) return "중간";
        return "높음";
    }

    /**
     * 기존 reason(짧은 문장)을 결과페이지에 더 어울리게 확장.
     * - 업종/운영형태를 살짝 끼워넣어서 "AI 추천" 느낌으로.
     */
    private String buildCardReason(RecommendRequest req, Alley alley, String baseReason) {
        String industry = safe(req.getIndustry());
        String op = safe(req.getOperationType());

        StringBuilder sb = new StringBuilder();

        if (!industry.isBlank()) {
            sb.append("‘").append(industry).append("’ 기준으로 ");
        }

        sb.append(baseReason).append(". ");

        if (!op.isBlank() && op.contains("팝업")) {
            sb.append("팝업 운영을 고려하면 주말 유동과 분위기 점수가 있는 곳이 유리해요.");
        } else if (!op.isBlank() && op.contains("정식")) {
            sb.append("정식 매장 운영을 고려하면 접근성과 경쟁도 균형이 중요해요.");
        } else if (!op.isBlank()) {
            sb.append("운영 형태를 반영해 안정적으로 시작하기 좋은 후보예요.");
        }

        return sb.toString().trim();
    }

    private record Scored(Alley alley, int score, String reason) {}
}
