package com.example.backend.school;

import com.example.backend.subject.Subject;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Getter
@Setter
public class School {
    @Id
    @GeneratedValue
    long id;

    @Size(min = 2, max = 50, message = "Kooli nimi peab olema vahemikus 2 kuni 50 tähte!")
    String name;

    @OneToMany(mappedBy = "school",  cascade=CascadeType.ALL)
    @JsonIgnoreProperties({"school", "teachings"})
    List<Subject> subjects;
}
