package com.example.backend.professor;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfessorRepository extends CrudRepository<Professor, Long>{
	@Override
	public List<Professor> findAll();

	public List<Professor> findBylastName(String searchString);
}
