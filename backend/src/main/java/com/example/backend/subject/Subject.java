package com.example.backend.subject;

import javax.persistence.*;
import javax.validation.constraints.Size;

import com.example.backend.school.School;
import com.example.backend.teaching.Teaching;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    @Size(min = 2, max = 50, message = "Aine nimi peab olema vahemikus 2 kuni 50 tähte!")
    String title;

    @ManyToOne
    @JsonIgnoreProperties({"subjects"})
    School school;

    @OneToMany(mappedBy = "subject",  cascade=CascadeType.ALL)
    @JsonIgnoreProperties({"subject", "comments"})
    List<Teaching> teachings;
}