package com.blockpick.backend.auth;

import com.blockpick.backend.auth.dto.*;
import com.blockpick.backend.global.ApiError;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthResponse signup(SignupRequest req) {
        validateSignup(req);

        if (userRepository.existsByLoginId(req.getLoginId())) {
            throw ApiError.conflict("이미 사용 중인 아이디입니다.");
        }
        if (userRepository.existsByNickname(req.getNickname())) {
            throw ApiError.conflict("이미 사용 중인 닉네임입니다.");
        }

        String hash = encoder.encode(req.getPassword());
        User user = new User(req.getName(), req.getNickname(), req.getPhone(), req.getLoginId(), hash);
        User saved = userRepository.save(user);

        String token = jwtUtil.issueToken(saved.getId(), saved.getLoginId());
        return new AuthResponse(token, saved.getNickname());
    }

    public AuthResponse login(LoginRequest req) {
        if (req.getLoginId() == null || req.getLoginId().isBlank()) {
            throw ApiError.badRequest("아이디를 입력하세요.");
        }
        if (req.getPassword() == null || req.getPassword().isBlank()) {
            throw ApiError.badRequest("비밀번호를 입력하세요.");
        }

        User user = userRepository.findByLoginId(req.getLoginId())
                .orElseThrow(() -> ApiError.unauthorized("아이디 또는 비밀번호가 올바르지 않습니다."));

        if (!encoder.matches(req.getPassword(), user.getPasswordHash())) {
            throw ApiError.unauthorized("아이디 또는 비밀번호가 올바르지 않습니다.");
        }

        String token = jwtUtil.issueToken(user.getId(), user.getLoginId());
        return new AuthResponse(token, user.getNickname());
    }

    public MeResponse me(String bearer) {
        String token = extractBearer(bearer);
        Long userId = jwtUtil.parseUserId(token);

        User user = userRepository.findById(userId)
                .orElseThrow(() -> ApiError.unauthorized("유효하지 않은 토큰입니다."));

        return new MeResponse(user.getId(), user.getName(), user.getNickname(), user.getPhone(), user.getLoginId());
    }

    private String extractBearer(String bearer) {
        if (bearer == null || !bearer.startsWith("Bearer ")) {
            throw ApiError.unauthorized("Authorization 헤더가 필요합니다.");
        }
        return bearer.substring("Bearer ".length()).trim();
    }

    private void validateSignup(SignupRequest req) {
        if (req.getName() == null || req.getName().isBlank()) throw ApiError.badRequest("이름을 입력하세요.");
        if (req.getNickname() == null || req.getNickname().isBlank()) throw ApiError.badRequest("닉네임을 입력하세요.");
        if (req.getPhone() == null || req.getPhone().isBlank()) throw ApiError.badRequest("전화번호를 입력하세요.");
        if (req.getLoginId() == null || req.getLoginId().isBlank()) throw ApiError.badRequest("아이디를 입력하세요.");
        if (req.getPassword() == null || req.getPassword().isBlank()) throw ApiError.badRequest("비밀번호를 입력하세요.");

        if (req.getPassword().length() < 4) throw ApiError.badRequest("비밀번호는 최소 4자 이상이어야 합니다.");
    }
}
