package com.example.backend;

import static org.junit.Assert.*;

import com.example.backend.comment.Comment;
import com.example.backend.commentRating.CommentRating;
import com.example.backend.teaching.Teaching;
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

@RunWith(SpringRunner.class)
@SpringBootTest
public class CommentTests {

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
        Comment comment = new Comment();
        comment.setComment("Kommentaar");

        //when:
        Set<ConstraintViolation<Comment>> violations
                = validator.validate(comment);

        //then:
        assertTrue(violations.isEmpty());
    }

    @Test
    public void shouldDetectTooShortComment() {
        //given too short comment:
        Comment comment = new Comment();
        comment.setComment("a");

        //when:
        Set<ConstraintViolation<Comment>> violations
                = validator.validate(comment);

        //then:
        assertEquals(violations.size(), 1);

        ConstraintViolation<Comment> violation
                = violations.iterator().next();
        assertEquals("Kommentaar peab olema vahemikus 2 kuni 200 tähte!",
                violation.getMessage());
        assertEquals("comment", violation.getPropertyPath().toString());
        assertEquals("a", violation.getInvalidValue());
    }

    @Test
    public void shouldDetectTooLongComment() {
        //given too long comment:
        Comment comment = new Comment();
        comment.setComment("abcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghi");

        //when:
        Set<ConstraintViolation<Comment>> violations
                = validator.validate(comment);

        //then:
        assertEquals(violations.size(), 1);

        ConstraintViolation<Comment> violation
                = violations.iterator().next();
        assertEquals("Kommentaar peab olema vahemikus 2 kuni 200 tähte!",
                violation.getMessage());
        assertEquals("comment", violation.getPropertyPath().toString());
        assertEquals("abcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghijklmnopqrsšzžtuvwõäöüxyabcdefghi", violation.getInvalidValue());
    }
}
