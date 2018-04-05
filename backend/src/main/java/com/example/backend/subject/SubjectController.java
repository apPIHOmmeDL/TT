package com.example.backend.subject;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class SubjectController {

    private SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value="/subjects/add", method=RequestMethod.POST,
            consumes = "application/json")
    public Subject addSubject(@RequestBody Subject subject) {
        return subjectService.addSubject(subject);
    }

    @RequestMapping(value="/subjects", method=RequestMethod.GET)
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @RequestMapping(value = "/subjects/{id}", method=RequestMethod.GET)
    public Subject getSubject(@PathVariable("id") long subjectId) {
        return subjectService.getSubjectById(subjectId);
    }
}