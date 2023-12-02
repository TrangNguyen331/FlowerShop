package com.hcmute.tlcn.services;

import com.hcmute.tlcn.dtos.RegisterDto;
import com.hcmute.tlcn.entities.Account;

public interface AccountService {
    String register(RegisterDto input);

    Account getAccountByAccountName(String userName);
}
