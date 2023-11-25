package com.hcmute.tlcn.controllers;

import com.hcmute.tlcn.dtos.LoginDto;
import com.hcmute.tlcn.dtos.LoginResultDto;
import com.hcmute.tlcn.dtos.MessageDto;
import com.hcmute.tlcn.dtos.RegisterDto;
import com.hcmute.tlcn.services.AccountService;
import com.hcmute.tlcn.utils.JwtTokenProvider;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/${application.version}/auth")
@CrossOrigin(origins = "https://localhost:3000")
public class AuthenticationController {
    //Login
    //Register
    //Logout (Fe Handler)
    //Forgot Password
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private AccountService accountService;

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
    @PostMapping("/register")
    public ResponseEntity<MessageDto> register(@Valid @RequestBody RegisterDto input){
       String result = accountService.register(input);
       return ResponseEntity.ok(new MessageDto(HttpStatus.OK.value(), result));
    }
}
