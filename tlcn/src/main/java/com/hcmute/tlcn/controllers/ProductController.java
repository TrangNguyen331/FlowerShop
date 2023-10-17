package com.hcmute.tlcn.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/${application.version}/products")
public class ProductController {
    @GetMapping
    public ResponseEntity<String> helloWorld(){
        return ResponseEntity.ok("Hello world");
    }
}
