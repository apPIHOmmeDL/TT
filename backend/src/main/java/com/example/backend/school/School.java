package com.example.backend.school;

import com.example.backend.subject.Subject;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class School {
    @Id
    @GeneratedValue
    long id;
    String name;

    @OneToMany(mappedBy = "school", cascade=CascadeType.ALL)
    List<Subject> subjects;
}
