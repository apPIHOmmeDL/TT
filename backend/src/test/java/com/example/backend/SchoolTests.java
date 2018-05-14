package com.example.backend;

import com.example.backend.school.School;
import com.example.backend.subject.Subject;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
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
public class SchoolTests {

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
        School school = new School();
        school.setName("Kooli nimi");

        //when:
        Set<ConstraintViolation<School>> violations
                = validator.validate(school);

        //then:
        assertTrue(violations.isEmpty());
    }

    @Test
    public void shouldHaveNameTooShortViolation() {
        //given too short name:
        School school = new School();
        school.setName("A");

        //when:
        Set<ConstraintViolation<School>> violations
                = validator.validate(school);

        //then:
        assertEquals(violations.size(), 1);

        ConstraintViolation<School> violation
                = violations.iterator().next();
        assertEquals("Kooli nimi peab olema vahemikus 2 kuni 50 tähte!",
                violation.getMessage());
        assertEquals("name", violation.getPropertyPath().toString());
        assertEquals("A", violation.getInvalidValue());
    }

    @Test
    public void shouldHaveNameTooLongViolation() {
        //given too long name:
        School school = new School();
        school.setName("abcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrs");

        //when:
        Set<ConstraintViolation<School>> violations
                = validator.validate(school);

        //then:
        assertEquals(violations.size(), 1);

        ConstraintViolation<School> violation
                = violations.iterator().next();
        assertEquals("Kooli nimi peab olema vahemikus 2 kuni 50 tähte!",
                violation.getMessage());
        assertEquals("name", violation.getPropertyPath().toString());
        assertEquals("abcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrs", violation.getInvalidValue());
    }
}
