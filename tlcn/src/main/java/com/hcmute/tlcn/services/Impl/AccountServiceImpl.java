package com.hcmute.tlcn.services.Impl;

import com.hcmute.tlcn.dtos.RegisterDto;
import com.hcmute.tlcn.entities.Account;
import com.hcmute.tlcn.exceptions.BadRequestException;
import com.hcmute.tlcn.repositories.AccountRepository;
import com.hcmute.tlcn.services.AccountService;
import com.hcmute.tlcn.utils.Roles;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService {


    private final AccountRepository accountRepository;

    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public String register(RegisterDto input) {
        String username=input.getEmail().split("@")[0];
        Optional<Account> check = accountRepository.findByUsername(username);
        if(check.isPresent()){
            throw new BadRequestException("Email was register, please using another email !!!");
        }
        if(!input.getPassword().equals(input.getConfirmPassword())){
            throw new BadRequestException("Password and Confirm password does not match !!!");
        }
        Account account=new Account();
        account.setUsername(username);
        account.setEmail(input.getEmail());
        BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
        String hashPassword=bCryptPasswordEncoder.encode(input.getPassword());
        account.setPassword(hashPassword);
        account.setFullName(input.getFullName());
        account.setGender(input.isGender());
        List<String> roles = List.of(Roles.ROLE_USER.name());
        account.setRoles(roles);
        accountRepository.save(account);
        return "Success";
    }
}
