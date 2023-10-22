package com.hcmute.tlcn.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class Product {
    @Id
    public String id;
    public String name;
    public String description;
    public String additionalInformation;
    public double price;
    public List<String> tags;
    public List<String> images;
    public List<Review> reviews;
    public boolean isActive;
}
