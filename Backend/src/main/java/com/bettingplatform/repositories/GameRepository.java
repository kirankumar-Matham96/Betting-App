package com.bettingplatform.repositories;

import com.bettingplatform.models.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
