package com.example.backend.teachingRating;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TeachingRatingService {

    private TeachingRatingRepository teachingRatingRepository;

    public TeachingRatingService(TeachingRatingRepository teachingRatingRepository) {
        this.teachingRatingRepository = teachingRatingRepository;
    }

    TeachingRating addRating(TeachingRating teachingRating) {
        // here you can do some validations etc before saving the user
        return teachingRatingRepository.save(teachingRating);
    }

    List<TeachingRating> getAllRatings() {
        return teachingRatingRepository.findAll();
    }

    TeachingRating getRatingById(long ratingId) {
        return teachingRatingRepository.findOne(ratingId);
    }
}
