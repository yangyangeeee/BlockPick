package com.blockpick.backend.domain.alley;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlleyRepository extends JpaRepository<Alley, Long> {
    List<Alley> findByRegionContainingIgnoreCase(String region);
}
