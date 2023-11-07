package com.hcmute.tlcn.repositories;

import com.hcmute.tlcn.entities.Collection;
import com.hcmute.tlcn.entities.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends MongoRepository<Review,String> {
}
