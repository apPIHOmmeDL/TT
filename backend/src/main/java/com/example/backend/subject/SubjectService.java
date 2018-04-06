package com.example.backend.subject;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class SubjectService {

    private SubjectRepository subjectRepository;

    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    Subject addSubject(Subject subject) {
        // here you can do some validations etc before saving the user
        return subjectRepository.save(subject);
    }

    List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    Subject getSubjectById(long subjectId) {
        return subjectRepository.findOne(subjectId);
    }
}