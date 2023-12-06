package com.hcmute.tlcn.services;

import com.hcmute.tlcn.dtos.order.OrderDto;
import com.hcmute.tlcn.dtos.order.ResponseOrderDto;
import com.hcmute.tlcn.entities.Order;

import java.util.List;

public interface OrderService {
    List<ResponseOrderDto> getOrderByUser(String user);
    Order addNew(OrderDto dto);

    ResponseOrderDto getById(String id);
}
