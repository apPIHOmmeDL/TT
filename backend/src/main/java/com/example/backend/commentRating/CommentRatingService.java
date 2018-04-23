package com.example.backend.commentRating;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentRatingService {

    private CommentRatingRepository commentRatingRepository;

    public CommentRatingService(CommentRatingRepository commentRatingRepository) {
        this.commentRatingRepository = commentRatingRepository;
    }

    CommentRating addRating(CommentRating commentRating) {
        // here you can do some validations etc before saving the user
        return commentRatingRepository.save(commentRating);
    }

    List<CommentRating> getAllRatings() {
        return commentRatingRepository.findAll();
    }

    CommentRating getRatingById(long ratingId) {
        return commentRatingRepository.findOne(ratingId);
    }
}
