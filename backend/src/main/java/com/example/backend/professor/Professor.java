package com.example.backend.professor;

import javax.persistence.*;

import com.example.backend.teaching.Teaching;
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
	List<Teaching> teachings;
}