package com.hcmute.tlcn;

import com.hcmute.tlcn.entities.Account;
import com.hcmute.tlcn.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

@SpringBootApplication
public class TlcnApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(TlcnApplication.class, args);
    }


    @Autowired
    private AccountRepository repository;
    @Override
    public void run(String... args) throws Exception {
        Optional<Account> accountTin= repository.findByUsername("tinnguyen331");
        if(accountTin.isEmpty()){
            BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
            String hashPassword=bCryptPasswordEncoder.encode("123");
            Account account=new Account();
            account.setUsername("tinnguyen331");
            account.setPassword(hashPassword);
            account.setEmail("tinnguyen331@gmail.com");
            account.setFullName("Nguyen Duc Tin");
            account.setGender(true);
            account.setRoles(new ArrayList<>(Arrays.asList("ROLE_USER", "ROLE_ADMIN")));
            repository.save(account);
        }
    }
}
