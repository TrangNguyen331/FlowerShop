package com.hcmute.tlcn.services;

import com.hcmute.tlcn.dtos.RegisterDto;
import com.hcmute.tlcn.dtos.UpdatePasswordDto;
import com.hcmute.tlcn.dtos.UpdateUserInfoDto;
import com.hcmute.tlcn.entities.Account;

public interface AccountService {
    String register(RegisterDto input);

    Account getAccountByAccountName(String userName);
    Account updateAccountInfo(String userName, UpdateUserInfoDto dto);
    Account updatePassword(String userName, UpdatePasswordDto dto);
}
