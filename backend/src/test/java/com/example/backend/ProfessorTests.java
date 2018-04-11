package com.example.backend;

import com.example.backend.professor.Professor;
import com.example.backend.teaching.Teaching;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestExecutionListener;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProfessorTests {
    private Professor testProfessor;
    private Teaching testTeaching1;
    private Teaching testTeaching2;
    private List<Teaching> testTeachings;

    @Before
    public void setUp() {
        testProfessor = new Professor();
        testTeaching1 = new Teaching();
        testTeaching2 = new Teaching();
        testTeachings = new ArrayList<Teaching>();
    }

    @Test
    public void testIfNewIdIsNotNull() {
        assertFalse(Objects.isNull(testProfessor.getId()));
    }

    @Test
    public void testIfCorrectFirstNameIsReturned() {
        testProfessor.setFirstName("Erki");
        assertEquals("Erki", testProfessor.getFirstName());
    }

    @Test
    public void testIfCorrectLastNameIsReturned() {
        testProfessor.setLastName("Nool");
        assertEquals("Nool", testProfessor.getLastName());
    }

    @Test
    public void testIfCorrectLengthArrayIsReturned() {
        testTeachings.add(testTeaching1);
        testTeachings.add(testTeaching2);
        testProfessor.setTeachings(testTeachings);
        assertEquals(2, testProfessor.getTeachings().size());
    }
}
