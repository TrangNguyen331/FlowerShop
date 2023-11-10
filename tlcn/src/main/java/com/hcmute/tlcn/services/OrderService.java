package com.hcmute.tlcn.services;

import com.hcmute.tlcn.dtos.order.OrderDto;
import com.hcmute.tlcn.entities.Order;

import java.util.List;

public interface OrderService {
    List<Order> getOrderByUser(String user);
    Order addNew(String user,OrderDto dto);
}
