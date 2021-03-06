package com.example.backend;

import com.example.backend.teaching.Teaching;
import com.example.backend.teachingRating.TeachingRating;
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
import java.util.Objects;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeachingRatingTests {

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
        TeachingRating teachingRating = new TeachingRating();
        teachingRating.setRating(0);

        //when:
        Set<ConstraintViolation<TeachingRating>> violations
                = validator.validate(teachingRating);

        //then:
        assertTrue(violations.isEmpty());
    }

    @Test
    public void shouldDetectTooLowRating() {
        //given:
        TeachingRating teachingRating = new TeachingRating();
        teachingRating.setRating(-1);

        //when:
        Set<ConstraintViolation<TeachingRating>> violations
                = validator.validate(teachingRating);

        assertEquals(violations.size(), 1);

        ConstraintViolation<TeachingRating> violation
                = violations.iterator().next();
        assertEquals("Hinne peab olema vähemalt 0!",
                violation.getMessage());
        assertEquals("rating", violation.getPropertyPath().toString());
        assertEquals(-1, violation.getInvalidValue());
    }

    @Test
    public void shouldDetectTooHighRating() {
        //given:
        TeachingRating teachingRating = new TeachingRating();
        teachingRating.setRating(2);

        //when:
        Set<ConstraintViolation<TeachingRating>> violations
                = validator.validate(teachingRating);

        assertEquals(violations.size(), 1);

        ConstraintViolation<TeachingRating> violation
                = violations.iterator().next();
        assertEquals("Hinne peab olema maksimaalselt 1!",
                violation.getMessage());
        assertEquals("rating", violation.getPropertyPath().toString());
        assertEquals(2, violation.getInvalidValue());
    }
}
