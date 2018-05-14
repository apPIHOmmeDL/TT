package com.example.backend.professor;

import javax.persistence.*;
import javax.validation.constraints.Size;

import com.example.backend.teaching.Teaching;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Professor {
	@Id
	@GeneratedValue
	long id;

	@Size(min = 2, max = 50, message = "Eesnimi peab olema vahemikus 2 kuni 50 tähte!")
	String firstName;

	@Size(min = 2, max = 50, message = "Perenimi peab olema vahemikus 2 kuni 50 tähte!")
	String lastName;

	@OneToMany(mappedBy = "professor",  cascade=CascadeType.ALL)
	@JsonIgnoreProperties({"professor"})
	List<Teaching> teachings;
}