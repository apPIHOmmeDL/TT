package com.example.backend.rating;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class RatingService {

    private RatingRepository ratingRepository;

    public RatingService(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    Rating addRating(Rating rating) {
        // here you can do some validations etc before saving the user
        return ratingRepository.save(rating);
    }

    List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    Rating getRatingById(long ratingId) {
        return ratingRepository.findOne(ratingId);
    }
}
