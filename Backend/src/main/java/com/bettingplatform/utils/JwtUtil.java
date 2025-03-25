package com.bettingplatform.utils;

import com.bettingplatform.models.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {
    // ! make it use env
    private final String SECRET_KEY = "a2e48a00a2618eb26289f6c420304364fe8ff46153f4474ab9cf393e5bf6ab9c13d475ed085f8876e994be4796a15446a91a78f7028590c1f8d9952d793d86abc49a610d5ca836b434eaca1091f40b5ac83d7f7e2f79b91b412cddbcca70f95e78fe28fc6fa07cb80aa0e30cc14755d405cf7bd108be35fd0aaf279abf80085447e9f0a00a19c524abad5b3d4dc7069e3f1ecf622448bf4d74292c3d92a4b6a7fe2f0707f4b24026f28b6d89fc7d08fc7ed6cc37394c6a3e2f2950e480ea269df8313c2dde34fc48473bbae4c867d82b51d9b90174e4fd464eade383e144eb39f107d017e1a52fa8b44b6d04667101f5577211b860c0bb8acbb07b90dea979c5";

    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("role", user.getRole().name())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 Day Expiry
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}
