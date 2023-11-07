package com.hcmute.tlcn.repositories;

import com.hcmute.tlcn.entities.Collection;
import com.hcmute.tlcn.entities.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends MongoRepository<Order,String> {
}
