package com.bettingplatform.repositories;

import com.bettingplatform.models.Bet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BetRepository extends JpaRepository<Bet, Long> {
}
