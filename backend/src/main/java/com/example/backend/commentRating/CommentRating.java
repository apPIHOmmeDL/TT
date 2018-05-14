package com.example.backend.commentRating;

import com.example.backend.comment.Comment;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Entity
@Getter
@Setter
public class CommentRating {
    @Id
    @GeneratedValue
    long id;

    @Min(value = 0, message = "Hinne peab olema vähemalt 0!")
    @Max(value = 1, message = "Hinne peab olema maksimaalselt 1!")
    int rating;

    @ManyToOne
    @JsonIgnoreProperties({"commentRatings", "comment", "teaching"})
    Comment comment;
}
