package com.example.backend.prof;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Prof {
	@Id
	@GeneratedValue
	long id;
	String firstName;
	String lastName;
	String aine;
}