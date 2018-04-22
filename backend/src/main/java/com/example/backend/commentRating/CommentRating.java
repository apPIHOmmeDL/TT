package com.example.backend.commentRating;

import com.example.backend.comment.Comment;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class CommentRating {
    @Id
    @GeneratedValue
    long id;
    int rating;

    @ManyToOne
    @JsonIgnoreProperties({"commentRatings", "comment", "teaching"})
    Comment comment;
}
