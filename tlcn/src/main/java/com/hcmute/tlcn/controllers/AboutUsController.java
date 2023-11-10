package com.hcmute.tlcn.controllers;

import com.hcmute.tlcn.dtos.aboutus.AboutUsDto;
import com.hcmute.tlcn.entities.AboutUs;
import com.hcmute.tlcn.repositories.AboutUsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/${application.version}/about-us")
public class AboutUsController {
    private final AboutUsRepository aboutUsRepository;

    public AboutUsController(AboutUsRepository aboutUsRepository) {
        this.aboutUsRepository = aboutUsRepository;
    }
    @GetMapping
    public ResponseEntity<AboutUsDto> getAboutUs(){
        AboutUsDto result = new AboutUsDto();
        Optional<AboutUs> entity =aboutUsRepository.findAll().stream().findFirst();
        if(entity.isPresent())
        {
            result.setId(entity.get().getId());
            result.setDescription(entity.get().getDescription());
        }
        return ResponseEntity.ok(result);
    }
}
