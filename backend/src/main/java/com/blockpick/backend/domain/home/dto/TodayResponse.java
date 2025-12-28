package com.blockpick.backend.domain.home.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class TodayResponse {
    private String date;
    private List<TodayItem> items;

    @Getter
    @AllArgsConstructor
    public static class TodayItem {
        private Long alleyId;
        private String name;
        private String summary;
        private int score;
        private String reason;
        private String imageUrl;
    }
}
