package com.example.backend;

import static org.junit.Assert.*;

import com.example.backend.comment.Comment;
import com.example.backend.teaching.Teaching;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Objects;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CommentTests {

    private Comment testComment;

    @Before
    public void setUp() {
        testComment = new Comment();
    }

    @Test
    public void testIfNewIdIsNotNull() {
        assertFalse(Objects.isNull(testComment.getId()));
    }

    @Test
    public void testIfCorrectCommentIsReturned() {
        testComment.setComment("Test");
        assertEquals("Test", testComment.getComment());
    }
}
