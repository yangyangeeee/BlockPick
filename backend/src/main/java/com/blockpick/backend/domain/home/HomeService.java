package com.blockpick.backend.domain.home;

import com.blockpick.backend.domain.alley.Alley;
import com.blockpick.backend.domain.alley.AlleyRepository;
import com.blockpick.backend.domain.home.dto.TodayResponse;
import com.blockpick.backend.domain.home.dto.TodayResponse.TodayItem;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
@RequiredArgsConstructor
public class HomeService {

    private final AlleyRepository alleyRepository;

    public TodayResponse getTodayPicks() {
        List<Alley> all = alleyRepository.findAll();
        if (all.isEmpty()) {
            return new TodayResponse(LocalDate.now().toString(), List.of());
        }

        // "오늘" 기준으로 매일 3개가 바뀌게(랜덤인데 매일 고정되게)
        long seed = LocalDate.now().toEpochDay();
        List<Alley> copy = new ArrayList<>(all);
        Collections.shuffle(copy, new Random(seed));

        List<Alley> picked = copy.subList(0, Math.min(3, copy.size()));

        List<TodayResponse.TodayItem> items = picked.stream().map(a -> {
            int base = (a.getFootTrafficScore() + a.getAccessScore() + a.getMoodScore()) / 3;
            String reason = "오늘은 유동과 분위기가 좋은 곳 위주로 골라봤어요";
            return new TodayResponse.TodayItem(
                    a.getId(),
                    a.getName(),
                    a.getSummary(),
                    base,
                    reason,
                    a.getImageUrl()
            );
        }).toList();

        return new TodayResponse(LocalDate.now().toString(), items);
    }
}
