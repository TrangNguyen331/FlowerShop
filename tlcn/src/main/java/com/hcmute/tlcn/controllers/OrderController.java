package com.hcmute.tlcn.controllers;

import com.hcmute.tlcn.dtos.order.OrderDto;
import com.hcmute.tlcn.entities.Order;
import com.hcmute.tlcn.services.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/${application.version}/orders")
public class OrderController {
    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrder(Principal principal){
        List<Order> result = service.getOrderByUser(principal.getName());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> addNewOrder(@RequestBody OrderDto dto, Principal principal){
        Order result = service.addNew(principal.getName(),dto);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
