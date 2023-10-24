package com.hcmute.tlcn.services;

import com.hcmute.tlcn.dtos.RegisterDto;

public interface AccountService {
    String register(RegisterDto input);
}
