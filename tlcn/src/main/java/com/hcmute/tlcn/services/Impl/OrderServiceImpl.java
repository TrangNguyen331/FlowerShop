package com.hcmute.tlcn.services.Impl;

import com.hcmute.tlcn.dtos.order.OrderDetailDto;
import com.hcmute.tlcn.dtos.order.OrderDto;
import com.hcmute.tlcn.dtos.order.ResponseOrderDto;
import com.hcmute.tlcn.entities.Account;
import com.hcmute.tlcn.entities.Order;
import com.hcmute.tlcn.exceptions.NotFoundException;
import com.hcmute.tlcn.repositories.AccountRepository;
import com.hcmute.tlcn.repositories.OrderRepository;
import com.hcmute.tlcn.repositories.ProductRepository;
import com.hcmute.tlcn.services.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    private final AccountRepository accountRepository;
    private final OrderRepository repository;
    private final ProductRepository productRepository;
    ModelMapper modelMapper = new ModelMapper();

    public OrderServiceImpl(AccountRepository accountRepository, OrderRepository repository, ProductRepository productRepository) {
        this.accountRepository = accountRepository;
        this.repository = repository;
        this.productRepository = productRepository;
    }

    @Override
    public List<ResponseOrderDto> getOrderByUser(String user) {
        List<ResponseOrderDto> response= new ArrayList<>();
        Account account = accountRepository.findByUsername(user)
                .orElseThrow(()-> new NotFoundException("Account not found"));
        List<Order> orders= repository.findAllByUser(account.getEmail());
        for (Order order: orders
             ) {
            ResponseOrderDto orderDto = modelMapper.map(order, ResponseOrderDto.class);
            for (OrderDetailDto detailDto:
                    orderDto.getDetails() ) {
                detailDto.setProduct(productRepository.findById(detailDto.getProductId()).orElse(null));
            }
            response.add(orderDto);
        }
        return response;
    }

    @Override
    public Order addNew(OrderDto dto) {
        Order order=new Order();
        modelMapper.map(dto,order);
        repository.save(order);
        return order;
    }
}
