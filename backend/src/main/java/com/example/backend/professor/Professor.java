package com.example.backend.professor;

import javax.persistence.*;

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
	String firstName;
	String lastName;

	@OneToMany(mappedBy = "professor",  cascade=CascadeType.ALL)
			@JsonIgnoreProperties({"professor"})
	List<Teaching> teachings;
}