package com.blockpick.backend.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MeResponse {
    private Long id;
    private String name;
    private String nickname;
    private String phone;
    private String loginId;
}
