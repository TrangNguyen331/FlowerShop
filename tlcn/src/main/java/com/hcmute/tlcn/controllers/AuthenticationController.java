package com.hcmute.tlcn.controllers;

import com.hcmute.tlcn.dtos.LoginDto;
import com.hcmute.tlcn.dtos.LoginResultDto;
import com.hcmute.tlcn.utils.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/${application.version}/auth")
public class AuthenticationController {
    //Login
    //Register
    //Logout (Fe Handler)
    //Forgot Password
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<LoginResultDto> login(@RequestBody LoginDto input){
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(input.getUsername(), input.getPassword()));
        if (authentication.isAuthenticated()) {
            String token= jwtTokenProvider.generateToken(input.getUsername());
            return ResponseEntity.ok(new LoginResultDto(token));
        } else {
            return (ResponseEntity<LoginResultDto>) ResponseEntity.badRequest();
        }
    }
}
