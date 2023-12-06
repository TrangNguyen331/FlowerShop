package com.hcmute.tlcn.controllers;

import com.hcmute.tlcn.dtos.order.OrderDto;
import com.hcmute.tlcn.dtos.order.ResponseOrderDto;
import com.hcmute.tlcn.entities.Order;
import com.hcmute.tlcn.services.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @PreAuthorize("isAuthenticated()")
    @GetMapping
    public ResponseEntity<List<ResponseOrderDto>> getAllOrder(Principal principal){
        List<ResponseOrderDto> result = service.getOrderByUser(principal.getName());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //@PreAuthorize("isAuthenticated()")
    @GetMapping("/{id}")
    public ResponseEntity<ResponseOrderDto> getOrderById(@PathVariable String id){
        ResponseOrderDto result = service.getById(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> addNewOrder(@RequestBody OrderDto dto){
        Order result = service.addNew(dto);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
