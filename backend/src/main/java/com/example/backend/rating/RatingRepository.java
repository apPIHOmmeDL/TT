package com.example.backend.rating;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends CrudRepository<Rating, Long>{
    @Override
    public List<Rating> findAll();
}
