package com.example.backend.subject;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Subject {
    @Id
    @GeneratedValue
    long id;
    String title;
    String school;
}