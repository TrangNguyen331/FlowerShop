package com.hcmute.tlcn.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Document
public class Order {
    @Id
    private String id;
    private String user;
    private List<OrderDetail> details;
    private double total;
    private String status;
    private String methodPaid;
    private boolean isPaid =false;

    @CreatedDate
    private LocalTime createdDate;
}
