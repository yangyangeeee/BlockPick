package com.blockpick.backend.domain.home;

import com.blockpick.backend.domain.home.dto.TodayResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/home")
public class HomeController {

    private final HomeService homeService;

    @GetMapping("/today")
    public TodayResponse today() {
        return homeService.getTodayPicks();
    }
}
