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
        Optional<Account> check = accountRepository.findByUsername(input.getUsername());
        if(check.isPresent()){
            throw new BadRequestException("Username was register, please using another username !!!");
        }
        Optional<Account> checkEmail = accountRepository.findByEmail(input.getEmail());
        if(checkEmail.isPresent()){
            throw new BadRequestException("Email was register, please using another Email !!!");
        }
        Account account=new Account();
        account.setUsername(input.getUsername());
        account.setEmail(input.getEmail());
        BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
        String hashPassword=bCryptPasswordEncoder.encode(input.getPassword());
        account.setPassword(hashPassword);
        List<String> roles = List.of(Roles.ROLE_USER.name());
        account.setRoles(roles);
        accountRepository.save(account);
        return "Success";
    }

    @Override
    public Account getAccountByAccountName(String userName) {
        return accountRepository.findByUsername(userName).orElse(new Account());
    }
}
