package com.example.backend.comment;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CommentService {

    private CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    Comment addComment(Comment comment) {
        // here you can do some validations etc before saving the user
        return commentRepository.save(comment);
    }

    List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    Comment getCommentById(long commentId) {
        return commentRepository.findOne(commentId);
    }
}