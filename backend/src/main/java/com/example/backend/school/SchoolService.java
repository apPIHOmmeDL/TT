package com.example.backend.school;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SchoolService {

    private SchoolRepository schoolRepository;

    public SchoolService(SchoolRepository schoolRepository) {
        this.schoolRepository = schoolRepository;
    }

    School addSchool(School school) {
        // here you can do some validations etc before saving the user
        return schoolRepository.save(school);
    }

    List<School> getAllSchools() {
        return schoolRepository.findAll();
    }

    School getSchoolById(long schoolId) {
        return schoolRepository.findOne(schoolId);
    }
}