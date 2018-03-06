package com.example.backend.prof;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProfService {
	
	private ProfRepository profRepository;

	public ProfService(ProfRepository profRepository) {
		this.profRepository = profRepository;
	}

	Prof addProf(Prof prof) {
		// here you can do some validations etc before saving the user
		return profRepository.save(prof);
	}

	List<Prof> getAllProfs() {
		return profRepository.findAll();
	}

	Prof getProfById(long profId) {
		return profRepository.findOne(profId);
	}
}
