package com.example.backend.comment;

import com.example.backend.teaching.Teaching;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
public class Comment {
    @Id
    @GeneratedValue
    long id;
    String comment;

    @ManyToOne
    @JsonIgnoreProperties({"professor", "subject", "comments", "ratings"})
    Teaching teaching;
}
