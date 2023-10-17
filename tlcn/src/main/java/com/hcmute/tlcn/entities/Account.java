package com.hcmute.tlcn.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Account {
    public String username;
    public String password;
    public String email;
    public String fullName;
    public boolean gender;
}
