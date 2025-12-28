package com.blockpick.backend.domain.alley;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "alley")
public class Alley {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 골목 이름
    @Column(nullable = false)
    private String name;

    // 지역(성수/홍대/신촌 등)
    @Column(nullable = false)
    private String region;

    // 한 줄 소개
    @Column(nullable = false, length = 200)
    private String summary;

    // 썸네일
    private String imageUrl;

    @Column(length = 50)
    private String tag1;

    @Column(length = 50)
    private String tag2;    

    @Column(length = 50)
    private String tag3;

    // 점수(0~100) - 룰 추천을 위한 feature들
    private int footTrafficScore;     // 유동인구
    private int rentLevelScore;       // 임대료(낮을수록 좋게 점수화했다고 가정)
    private int competitionScore;     // 경쟁강도(낮을수록 좋게 점수화했다고 가정)
    private int accessScore;          // 접근성
    private int moodScore;            // 분위기/이미지
    private int weekdayFootTraffic;   // 주중 유동인구 수
    private int weekendFootTraffic;   // 주말 유동인구 수
    private int competitorCount;     // 경쟁업체 수

    public Alley(
            String name,
            String region,
            String summary,
            String imageUrl,
            int footTrafficScore,
            int rentLevelScore,
            int competitionScore,
            int accessScore,
            int moodScore,
            int weekdayFootTraffic,
            int weekendFootTraffic,
            int competitorCount,
            String tag1,
            String tag2,
            String tag3
    ) {
        this.name = name;
        this.region = region;
        this.summary = summary;
        this.imageUrl = imageUrl;
        this.footTrafficScore = clamp(footTrafficScore);
        this.rentLevelScore = clamp(rentLevelScore);
        this.competitionScore = clamp(competitionScore);
        this.accessScore = clamp(accessScore);
        this.moodScore = clamp(moodScore);

        this.weekdayFootTraffic = Math.max(0, weekdayFootTraffic);
        this.weekendFootTraffic = Math.max(0, weekendFootTraffic);
        this.competitorCount = Math.max(0, competitorCount);

        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
    }

    private int clamp(int v) {
        if (v < 0) return 0;
        if (v > 100) return 100;
        return v;
    }
}
