package com.example.backend.teaching;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TeachingService {

    private TeachingRepository teachingRepository;

    public TeachingService(TeachingRepository teachingRepository) {
        this.teachingRepository = teachingRepository;
    }

    Teaching addTeaching(Teaching teaching) {
        // here you can do some validations etc before saving the user
        return teachingRepository.save(teaching);
    }

    List<Teaching> getAllTeachings() {
        return teachingRepository.findAll();
    }

    Teaching getTeachingById(long teachingId) {
        return teachingRepository.findOne(teachingId);
    }
}
