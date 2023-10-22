package com.hcmute.tlcn.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class Collection {
    @Id
    public String id;
    public String name;
    public String image;
    public String description;
    @DBRef
    public List<Product> products;
}
