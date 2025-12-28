package com.blockpick.backend.global;

import lombok.Getter;

@Getter
public class ApiError extends RuntimeException {
    private final int status;

    public ApiError(int status, String message) {
        super(message);
        this.status = status;
    }

    public static ApiError badRequest(String msg) { return new ApiError(400, msg); }
    public static ApiError unauthorized(String msg) { return new ApiError(401, msg); }
    public static ApiError conflict(String msg) { return new ApiError(409, msg); }
}
