package com.example.backend.commentRating;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRatingRepository extends CrudRepository<CommentRating, Long>{
    @Override
    public List<CommentRating> findAll();
}
