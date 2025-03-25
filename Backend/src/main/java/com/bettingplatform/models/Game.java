package com.bettingplatform.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Table(name = "games")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double minBet;
    private double maxBet;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date startTime;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date endTime;

    private boolean isActive;
}
