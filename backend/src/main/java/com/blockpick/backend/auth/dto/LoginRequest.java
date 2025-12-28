package com.blockpick.backend.auth.dto;

import lombok.Getter;

@Getter
public class LoginRequest {
    private String loginId;
    private String password;
}

// Request Body
// {
//   "loginId": "string",
//   "password": "string"
// }

// Response (200 OK)
// {
//   "token": "string",       // JWT Access Token
//   "nickname": "string"
// }