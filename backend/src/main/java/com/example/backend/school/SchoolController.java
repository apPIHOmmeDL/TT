package com.example.backend.school;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

public class SchoolController {
    private SchoolService schoolService;

    public SchoolController(SchoolService schoolService) {
        this.schoolService = schoolService;
    }
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value="/schools/add", method=RequestMethod.POST,
            consumes = "application/json")
    public School addSubject(@RequestBody School school) {
        return schoolService.addSchool(school);
    }

    @RequestMapping(value="/schools", method=RequestMethod.GET)
    public List<School> getAllSchools() {
        return schoolService.getAllSchools();
    }

    @RequestMapping(value = "/schools/{id}", method=RequestMethod.GET)
    public School School(@PathVariable("id") long schoolId) {
        return schoolService.getSchoolById(schoolId);
    }
}
