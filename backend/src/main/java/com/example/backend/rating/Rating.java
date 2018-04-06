package com.example.backend.rating;

import com.example.backend.teaching.Teaching;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
public class Rating {
    @Id
    @GeneratedValue
    long id;
    Byte rating;

    @ManyToOne
    @JsonBackReference
    Teaching teaching;
}
