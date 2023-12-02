package com.hcmute.tlcn.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Document
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
    public List<String> collections;
    public boolean isActive=true;
}
