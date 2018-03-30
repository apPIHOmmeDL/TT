package com.example.backend.professor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Professor {
	@Id
	@GeneratedValue
	long id;
	String firstName;
	String lastName;
}