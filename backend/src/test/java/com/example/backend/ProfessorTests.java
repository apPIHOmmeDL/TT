package com.example.backend;

import com.example.backend.professor.Professor;
import com.example.backend.teaching.Teaching;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestExecutionListener;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProfessorTests {

    private static ValidatorFactory validatorFactory;
    private static Validator validator;

    @BeforeClass
    public static void createValidator() {
        validatorFactory = Validation.buildDefaultValidatorFactory();
        validator = validatorFactory.getValidator();
    }

    @AfterClass
    public static void close() {
        validatorFactory.close();
    }

    @Test
    public void shouldHaveNoViolations() {
        //given:
        Professor professor = new Professor();
        professor.setFirstName("Eesnimi");
        professor.setLastName("Perenimi");

        //when:
        Set<ConstraintViolation<Professor>> violations
                = validator.validate(professor);

        //then:
        assertTrue(violations.isEmpty());
    }

    @Test
    public void shouldHaveNameTooShortViolation() {
        //given too short name:
        Professor professor = new Professor();
        professor.setFirstName("E");

        //when:
        Set<ConstraintViolation<Professor>> violations
                = validator.validate(professor);

        //then:
        assertEquals(violations.size(), 1);

        ConstraintViolation<Professor> violation
                = violations.iterator().next();
        assertEquals("Eesnimi peab olema vahemikus 2 kuni 50 tähte!",
                violation.getMessage());
        assertEquals("firstName", violation.getPropertyPath().toString());
        assertEquals("E", violation.getInvalidValue());
    }

    @Test
    public void shouldHaveNameTooLongViolation() {
        //given too long name:
        Professor professor = new Professor();
        professor.setLastName("abcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrs");

        //when:
        Set<ConstraintViolation<Professor>> violations
                = validator.validate(professor);

        //then:
        assertEquals(violations.size(), 1);

        ConstraintViolation<Professor> violation
                = violations.iterator().next();
        assertEquals("Perenimi peab olema vahemikus 2 kuni 50 tähte!",
                violation.getMessage());
        assertEquals("lastName", violation.getPropertyPath().toString());
        assertEquals("abcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrs", violation.getInvalidValue());
    }
}
