package com.example.backend.teaching;

import java.util.List;

import com.example.backend.teaching.Teaching;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class TeachingController {

    private TeachingService teachingService;

    public TeachingController(TeachingService teachingService) {
        this.teachingService = teachingService;
    }
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value="/teachings/add", method=RequestMethod.POST,
            consumes = "application/json")
    public Teaching addTeaching(@RequestBody Teaching teaching) {
        return teachingService.addTeaching(teaching);
    }

    @RequestMapping(value="/teachings", method=RequestMethod.GET)
    public List<Teaching> getAllTeachings() {
        return teachingService.getAllTeachings();
    }

    @RequestMapping(value = "/teachings/{id}", method=RequestMethod.GET)
    public Teaching getTeaching(@PathVariable("id") long teachingId) {
        return teachingService.getTeachingById(teachingId);
    }
}