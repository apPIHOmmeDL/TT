package com.example.backend.teaching;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeachingRepository extends CrudRepository<Teaching, Long>{
    @Override
    public List<Teaching> findAll();
}
