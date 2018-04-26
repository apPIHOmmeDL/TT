package com.example.backend.professor;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProfessorService {
	
	private ProfessorRepository professorRepository;

	public ProfessorService(ProfessorRepository professorRepository) {
		this.professorRepository = professorRepository;
	}

	Professor addProfessor(Professor professor) {
		// here you can do some validations etc before saving the user
		return professorRepository.save(professor);
	}

	List<Professor> getAllProfessors() {
		return professorRepository.findAll();
	}

	Professor getProfessorById(long professorId) {
		return professorRepository.findOne(professorId);
	}

	List<Professor> searchProfessors(String searchString) {
		return professorRepository.findByLastNameContaining(searchString);
	}
}
