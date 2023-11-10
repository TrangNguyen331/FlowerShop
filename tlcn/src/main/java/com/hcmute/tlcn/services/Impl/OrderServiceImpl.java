package com.hcmute.tlcn.services.Impl;

import com.hcmute.tlcn.dtos.order.OrderDto;
import com.hcmute.tlcn.entities.Order;
import com.hcmute.tlcn.repositories.OrderRepository;
import com.hcmute.tlcn.services.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    private final OrderRepository repository;
    ModelMapper modelMapper = new ModelMapper();

    public OrderServiceImpl(OrderRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Order> getOrderByUser(String user) {
        return repository.findAllByUser(user);
    }

    @Override
    public Order addNew(String user, OrderDto dto) {
        Order order=new Order();
        modelMapper.map(dto,order);
        order.setUser(user);
        repository.save(order);
        return order;
    }
}
