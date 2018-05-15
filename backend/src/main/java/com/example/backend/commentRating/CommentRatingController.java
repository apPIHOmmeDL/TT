package com.example.backend.commentRating;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentRatingController {

    private CommentRatingService commentRatingService;

    public CommentRatingController(CommentRatingService commentRatingService) {
        this.commentRatingService = commentRatingService;
    }
    @CrossOrigin()
    @RequestMapping(value="/commentRatings/add", method=RequestMethod.POST,
            consumes = "application/json")
    public CommentRating addCommentRating(@RequestBody CommentRating commentRating) {
        return commentRatingService.addRating(commentRating);
    }

    @RequestMapping(value="/commentRatings", method=RequestMethod.GET)
    public List<CommentRating> getAllCommentRatings() {
        return commentRatingService.getAllRatings();
    }

    @RequestMapping(value = "/commentRatings/{id}", method=RequestMethod.GET)
    public CommentRating getCommentRating(@PathVariable("id") long ratingId) {
        return commentRatingService.getRatingById(ratingId);
    }
}
