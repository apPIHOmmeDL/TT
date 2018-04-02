package com.example.backend.subject;

import javax.persistence.*;

import com.example.backend.school.School;
import com.example.backend.teaching.Teaching;
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
    School school;

    @OneToMany(mappedBy = "subject")
    List<Teaching> teachings;
}