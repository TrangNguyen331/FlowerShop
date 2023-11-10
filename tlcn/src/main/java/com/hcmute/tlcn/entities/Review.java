package com.hcmute.tlcn.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class Review {
    public String id = UUID.randomUUID().toString();
    public String accountName;
    public String content;
    public double rating;
}
