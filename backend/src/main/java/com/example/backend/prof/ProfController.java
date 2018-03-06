package com.example.backend.prof;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfController {
	
	private ProfService profService;

	public ProfController(ProfService profService) {
		this.profService = profService;
	}
	
	@RequestMapping(value="/profs/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Prof addProf(@RequestBody Prof prof) {
		return profService.addProf(prof);
	}
	
	@RequestMapping(value="/profs", method=RequestMethod.GET)
	public List<Prof> getAllProfs() {
		return profService.getAllProfs();
	}
	
	@RequestMapping(value = "/profs/{id}", method=RequestMethod.GET)
	public Prof getProf(@PathVariable("id") long profId) {
		return profService.getProfById(profId);
	}
}