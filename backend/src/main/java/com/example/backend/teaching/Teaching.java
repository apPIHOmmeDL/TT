package com.example.backend.teaching;

import javax.persistence.*;

import com.example.backend.comment.Comment;
import com.example.backend.professor.Professor;
import com.example.backend.rating.Rating;
import com.example.backend.subject.Subject;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @JsonBackReference
    Professor professor;

    @ManyToOne
    @JsonManagedReference
    Subject subject;

    @OneToMany(mappedBy = "teaching",  cascade=CascadeType.ALL)
    @JsonManagedReference
    List<Comment> comments;

    @OneToMany(mappedBy = "teaching",  cascade=CascadeType.ALL)
    @JsonManagedReference
    List<Rating> ratings;
}