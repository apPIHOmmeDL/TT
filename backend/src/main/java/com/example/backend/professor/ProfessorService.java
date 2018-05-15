package com.example.backend.professor;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

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
		List<Professor> searchByFirstName = professorRepository.findByFirstNameContaining(searchString);
		List<Professor> searchByLastName = professorRepository.findByLastNameContaining(searchString);

		Set<Professor> onlyUnique = new LinkedHashSet<>(searchByFirstName);
		onlyUnique.addAll(searchByLastName);
		List<Professor> finalResult = new ArrayList<>(onlyUnique);

		return finalResult;
	}
}
