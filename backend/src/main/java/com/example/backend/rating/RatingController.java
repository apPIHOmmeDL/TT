package com.example.backend.rating;

import java.util.List;

import com.example.backend.teaching.Teaching;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class RatingController {

    private RatingService ratingService;

    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value="/ratings/add", method=RequestMethod.POST,
            consumes = "application/json")
    public Rating addProfessor(@RequestBody Rating rating) {
        return ratingService.addRating(rating);
    }

    @RequestMapping(value="/ratings", method=RequestMethod.GET)
    public List<Rating> getAllProfessors() {
        return ratingService.getAllRatings();
    }

    @RequestMapping(value = "/ratings/{id}", method=RequestMethod.GET)
    public Rating getProfessor(@PathVariable("id") long ratingId) {
        return ratingService.getRatingById(ratingId);
    }
}