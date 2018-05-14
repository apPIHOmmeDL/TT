package com.example.backend.teachingRating;

import com.example.backend.teaching.Teaching;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Entity
@Getter
@Setter
public class TeachingRating {
    @Id
    @GeneratedValue
    long id;

    @Min(value = 0, message = "Hinne peab olema vähemalt 0!")
    @Max(value = 1, message = "Hinne peab olema maksimaalselt 1!")
    int rating;

    @ManyToOne
    @JsonIgnoreProperties({"professor", "subject", "comments", "teachingRatings"})
    Teaching teaching;
}
