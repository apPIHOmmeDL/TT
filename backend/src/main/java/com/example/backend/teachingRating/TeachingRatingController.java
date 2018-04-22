package com.example.backend.teachingRating;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class TeachingRatingController {

    private TeachingRatingService teachingRatingService;

    public TeachingRatingController(TeachingRatingService teachingRatingService) {
        this.teachingRatingService = teachingRatingService;
    }
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value="/teachingRatings/add", method=RequestMethod.POST,
            consumes = "application/json")
    public TeachingRating addTeachingRating(@RequestBody TeachingRating teachingRating) {
        return teachingRatingService.addRating(teachingRating);
    }

    @RequestMapping(value="/teachingRatings", method=RequestMethod.GET)
    public List<TeachingRating> getAllTeachingRatings() {
        return teachingRatingService.getAllRatings();
    }

    @RequestMapping(value = "/teachingRatings/{id}", method=RequestMethod.GET)
    public TeachingRating getTeachingRating(@PathVariable("id") long ratingId) {
        return teachingRatingService.getRatingById(ratingId);
    }
}