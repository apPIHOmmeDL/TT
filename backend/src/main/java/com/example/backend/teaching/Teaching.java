package com.example.backend.teaching;

import javax.persistence.*;

import com.example.backend.comment.Comment;
import com.example.backend.professor.Professor;
import com.example.backend.teachingRating.TeachingRating;
import com.example.backend.subject.Subject;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Teaching {
    @Id
    @GeneratedValue
    long id;

    @ManyToOne
    @JsonIgnoreProperties({"teachings"})
    Professor professor;

    @ManyToOne
    @JsonIgnoreProperties({"teachings"})
    Subject subject;

    @OneToMany(mappedBy = "teaching",  cascade=CascadeType.ALL)
    List<Comment> comments;

    @OneToMany(mappedBy = "teaching",  cascade=CascadeType.ALL)
    List<TeachingRating> teachingRatings;
}