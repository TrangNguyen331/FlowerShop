package com.hcmute.tlcn.repositories;

import com.hcmute.tlcn.entities.Collection;
import com.hcmute.tlcn.entities.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order,String> {
    List<Order> findAllByUser(String user);
}
