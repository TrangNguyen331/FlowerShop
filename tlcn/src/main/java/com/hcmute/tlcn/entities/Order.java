package com.hcmute.tlcn.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class Order {
    @Id
    private String id;
    private Account account;
    private List<Product> products;
    private double total;
    private String status;
    private String methodPaid;
    private boolean isPaid =false;
}
