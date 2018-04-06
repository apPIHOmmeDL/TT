package com.example.backend.subject;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends CrudRepository<Subject, Long>{
    @Override
    public List<Subject> findAll();
}
