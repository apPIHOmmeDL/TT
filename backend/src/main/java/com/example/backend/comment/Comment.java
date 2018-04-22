package com.example.backend.comment;

import com.example.backend.commentRating.CommentRating;
import com.example.backend.teaching.Teaching;
import com.example.backend.teachingRating.TeachingRating;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Comment {
    @Id
    @GeneratedValue
    long id;
    String comment;

    @OneToMany(mappedBy = "comment",  cascade=CascadeType.ALL)
    @JsonIgnoreProperties({"comment"})
    List<CommentRating> commentRatings;

    @ManyToOne
    @JsonIgnoreProperties({"professor", "subject", "comments", "teachingRatings"})
    Teaching teaching;
}
