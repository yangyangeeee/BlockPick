package com.blockpick.backend.domain.recommend.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class RecommendRequest {
    private String industry;        // 업종
    private String budgetRange;     // 예산 범위
    private String preferredRegion; // 선호 지역
    private String operationType;   // 운영 형태(팝업/임시/정식)
    private String experienceLevel; // 경험(처음/팝업경험/정식경험)
    private List<String> priorities; // ["유동인구","임대료수준","접근성"...]
}

// Requsest body
// {
//   "industry": "카페",
//   "budgetRange": "3000-5000",
//   "preferredRegion": "홍대",
//   "operationType": "팝업스토어",
//   "experienceLevel": "처음",
//   "priorities": ["유동인구", "임대료수준", "접근성"]
// }
