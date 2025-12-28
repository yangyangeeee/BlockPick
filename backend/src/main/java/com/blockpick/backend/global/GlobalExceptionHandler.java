package com.blockpick.backend.global;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ApiError.class)
    public ResponseEntity<?> handleApiError(ApiError e) {
        return ResponseEntity.status(e.getStatus()).body(Map.of(
                "message", e.getMessage(),
                "status", e.getStatus()
        ));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleUnknown(Exception e) {
        return ResponseEntity.status(500).body(Map.of(
                "message", "서버 오류",
                "status", 500
        ));
    }
}
