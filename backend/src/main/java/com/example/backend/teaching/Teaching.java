package com.example.backend.teaching;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.example.backend.professor.Professor;
import com.example.backend.subject.Subject;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Teaching {
    @Id
    @GeneratedValue
    long id;
    @OneToOne
    Professor professor;
    @OneToOne
    Subject subject;
}