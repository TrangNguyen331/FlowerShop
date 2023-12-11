package com.hcmute.tlcn.services;

import com.hcmute.tlcn.dtos.order.OrderDto;
import com.hcmute.tlcn.dtos.order.ResponseOrderDto;
import com.hcmute.tlcn.entities.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface OrderService {
    List<ResponseOrderDto> getOrderByUser(String user);

    Page<ResponseOrderDto> getPaging(String search, Pageable pageable);
    Order addNew(OrderDto dto);
    Order updateOrder (String id,OrderDto dto);
    ResponseOrderDto getById(String id);
}
