package com.bettingplatform.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "bets")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Bet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;

    private double amount;
}
