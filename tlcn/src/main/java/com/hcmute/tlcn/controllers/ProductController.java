package com.hcmute.tlcn.controllers;

import com.hcmute.tlcn.entities.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/${application.version}/products")
public class ProductController {
    @GetMapping
    public ResponseEntity<String> helloWorld(Principal principal){
        return ResponseEntity.ok("Hello world");
    }

    // Get Product by Tags
    @GetMapping("/page")
    public ResponseEntity<List<Product>> getAllProductByTags(@RequestParam(defaultValue = "0") int skip
            ,@RequestParam  String search
            ,@RequestParam List<String> tags){
        List<Product> result = new ArrayList<>();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id){
        return ResponseEntity.ok(new Product());
    }
}
