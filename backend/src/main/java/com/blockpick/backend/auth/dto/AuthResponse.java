package com.blockpick.backend.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String nickname;
}

// Headers
// Authorization: Bearer {JWT Access Token}

// Response (200 OK)
// {
//   "id": 1,
//   "loginId": "yang",
//   "nickname": "양양이"
// }
//