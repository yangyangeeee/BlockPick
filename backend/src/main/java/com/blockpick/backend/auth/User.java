package com.blockpick.backend.auth;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "users",
       uniqueConstraints = {
           @UniqueConstraint(name="uk_users_login_id", columnNames="loginId"),
           @UniqueConstraint(name="uk_users_nickname", columnNames="nickname")
       })
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, length=50)
    private String name;

    @Column(nullable=false, length=30)
    private String nickname;

    @Column(nullable=false, length=20)
    private String phone;

    @Column(nullable=false, length=50)
    private String loginId;

    @Column(nullable=false)
    private String passwordHash;

    @Column(nullable=false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public User(String name, String nickname, String phone, String loginId, String passwordHash) {
        this.name = name;
        this.nickname = nickname;
        this.phone = phone;
        this.loginId = loginId;
        this.passwordHash = passwordHash;
    }
}
