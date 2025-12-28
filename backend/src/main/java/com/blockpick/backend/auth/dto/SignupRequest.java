package com.blockpick.backend.auth.dto;

import lombok.Getter;

@Getter
public class SignupRequest {
    private String name;
    private String nickname;
    private String phone;
    private String loginId;
    private String password;
}


// Request Body
// {
//   "name": "string",        // 사용자 이름
//   "nickname": "string",    // 닉네임 (unique)
//   "phone": "string",       // 전화번호
//   "loginId": "string",     // 로그인 아이디 (unique)
//   "password": "string"    // 비밀번호
// }

// Response (200 OK)
// {
//   "token": "string",       // JWT Access Token
//   "nickname": "string"    // 가입된 닉네임
// }