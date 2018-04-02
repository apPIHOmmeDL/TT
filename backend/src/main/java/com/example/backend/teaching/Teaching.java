package com.example.backend.teaching;

import javax.persistence.*;

import com.example.backend.comment.Comment;
import com.example.backend.professor.Professor;
import com.example.backend.rating.Rating;
import com.example.backend.subject.Subject;
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
    Professor professor;

    @ManyToOne
    Subject subject;
/*
    @OneToMany(mappedBy = "teaching", cascade=CascadeType.ALL)
    List<Comment> comments;

    @OneToMany(mappedBy = "teaching", cascade=CascadeType.ALL)
    List<Rating> ratings;*/
}