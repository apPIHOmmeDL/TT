package com.example.backend.prof;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfRepository extends CrudRepository<Prof, Long>{
	@Override
	public List<Prof> findAll();
}
