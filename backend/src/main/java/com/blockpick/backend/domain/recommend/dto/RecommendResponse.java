package com.blockpick.backend.domain.recommend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RecommendResponse {

    private Criteria criteria;
    private List<RecommendItem> items;

    @Getter
    @AllArgsConstructor
    public static class Criteria {
        private String industry;
        private String budgetRange;
        private String region;
        private String operationType;
    }

    @Getter
    @AllArgsConstructor
    public static class RecommendItem {
        private int rank;
        private Long alleyId;
        private String name;
        private int score;
        private String summary;
        private String reason;
        private String imageUrl;

        private FootTraffic footTraffic;
        private Competition competition;
        private List<String> tags;
    }

    @Getter
    @AllArgsConstructor
    public static class FootTraffic {
        private String label;   // "유동 인구"
        private int weekday;    // 주중
        private int weekend;    // 주말
    }

    @Getter
    @AllArgsConstructor
    public static class Competition {
        private String label;          // "경쟁도"
        private String level;          // "낮음/중간/높음"
        private int competitorCount;   // 경쟁업체 수
    }
}
