package com.example.backend.professor;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class ProfessorController {
	
	private ProfessorService professorService;

	public ProfessorController(ProfessorService professorService) {
		this.professorService = professorService;
	}
	@CrossOrigin(origins = "http://localhost:9000")
	@RequestMapping(value="/profs/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Professor addProfessor(@RequestBody Professor professor) {
		return professorService.addProfessor(professor);
	}
	
	@RequestMapping(value="/profs", method=RequestMethod.GET)
	public List<Professor> getAllProfessors() {
		return professorService.getAllProfessors();
	}
	
	@RequestMapping(value = "/profs/{id}", method=RequestMethod.GET)
	public Professor getProfessor(@PathVariable("id") long professorId) {
		return professorService.getProfessorById(professorId);
	}
}