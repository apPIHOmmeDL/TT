package com.example.backend;

import com.example.backend.commentRating.CommentRating;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CommentRatingTests {

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
        CommentRating commentRating = new CommentRating();
        commentRating.setRating(0);

        //when:
        Set<ConstraintViolation<CommentRating>> violations
                = validator.validate(commentRating);

        //then:
        assertTrue(violations.isEmpty());
    }

    @Test
    public void shouldDetectTooLowRating() {
        //given:
        CommentRating commentRating = new CommentRating();
        commentRating.setRating(-1);

        //when:
        Set<ConstraintViolation<CommentRating>> violations
                = validator.validate(commentRating);

        assertEquals(violations.size(), 1);

        ConstraintViolation<CommentRating> violation
                = violations.iterator().next();
        assertEquals("Hinne peab olema vähemalt 0!",
                violation.getMessage());
        assertEquals("rating", violation.getPropertyPath().toString());
        assertEquals(-1, violation.getInvalidValue());
    }

    @Test
    public void shouldDetectTooHighRating() {
        //given:
        CommentRating commentRating = new CommentRating();
        commentRating.setRating(2);

        //when:
        Set<ConstraintViolation<CommentRating>> violations
                = validator.validate(commentRating);

        assertEquals(violations.size(), 1);

        ConstraintViolation<CommentRating> violation
                = violations.iterator().next();
        assertEquals("Hinne peab olema maksimaalselt 1!",
                violation.getMessage());
        assertEquals("rating", violation.getPropertyPath().toString());
        assertEquals(2, violation.getInvalidValue());
    }
}
