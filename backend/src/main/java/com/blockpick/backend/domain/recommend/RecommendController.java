package com.blockpick.backend.domain.recommend;

import com.blockpick.backend.domain.recommend.dto.RecommendRequest;
import com.blockpick.backend.domain.recommend.dto.RecommendResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class RecommendController {

    private final RecommendService recommendService;

    @PostMapping("/recommendations")
    public RecommendResponse recommend(@RequestBody RecommendRequest req) {
        return recommendService.recommend(req);
    }
}
