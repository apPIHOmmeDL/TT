package com.example.backend.subject;

import javax.persistence.*;

import com.example.backend.school.School;
import com.example.backend.teaching.Teaching;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Subject {
    @Id
    @GeneratedValue
    long id;
    String title;

    @ManyToOne
    @JsonManagedReference
    School school;

    @OneToMany(mappedBy = "subject",  cascade=CascadeType.ALL)
    @JsonBackReference
    List<Teaching> teachings;
}