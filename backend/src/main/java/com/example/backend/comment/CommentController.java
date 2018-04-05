package com.example.backend.comment;

import java.util.List;

import com.example.backend.teaching.Teaching;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class CommentController {

    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value="/comments/add", method=RequestMethod.POST,
            consumes = "application/json")
    public Comment addComment(@RequestBody Comment comment) {
        return commentService.addComment(comment);
    }

    @RequestMapping(value="/comments", method=RequestMethod.GET)
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    @RequestMapping(value = "/comments/{id}", method=RequestMethod.GET)
    public Comment getComment(@PathVariable("id") long commentId) {
        return commentService.getCommentById(commentId);
    }
}