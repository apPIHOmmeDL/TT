package com.example.backend.teachingRating;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeachingRatingRepository extends CrudRepository<TeachingRating, Long>{
    @Override
    public List<TeachingRating> findAll();
}
