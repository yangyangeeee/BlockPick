package com.blockpick.backend.domain.alley;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class AlleySeed implements CommandLineRunner {

    private final AlleyRepository alleyRepository;

    @Override
    public void run(String... args) {
        if (alleyRepository.count() > 0) return;

List<Alley> sample = List.of(
    new Alley("성수 연무장길", "성수", "카페·편집숍 밀집, 체류형 유동", null,
        86, 58, 60, 82, 88,
        12000, 22000, 14,
        "2030 타겟", "SNS 핫플", "체류형 유동"
    ),
    new Alley("홍대 걷고싶은거리", "홍대", "젊은 유동 풍부, 트렌드 민감", null,
        92, 45, 52, 90, 80,
        15000, 25000, 12,
        "2030 타겟", "SNS 핫플", "주말 집중"
    ),
    new Alley("신촌 명물거리", "신촌", "대학생 유동 많음, 회전 빠름", null,
        89, 60, 55, 85, 72,
        14000, 21000, 16,
        "대학가", "회전 빠름", "가성비"
    ),
    new Alley("망원 월드컵시장 골목", "망원", "로컬 상권, 단골 중심", null,
        70, 78, 74, 68, 75,
        8000, 12000, 9,
        "로컬", "단골 중심", "생활 상권"
    ),
    new Alley("연남동 경의선숲길", "연남", "산책 유동+감성 상권", null,
        83, 52, 62, 80, 92,
        11000, 18000, 13,
        "감성", "데이트", "산책 유동"
    )
);
        alleyRepository.saveAll(sample);
    }
}
