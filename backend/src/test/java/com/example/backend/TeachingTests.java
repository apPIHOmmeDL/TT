package com.example.backend;

import com.example.backend.comment.Comment;
import com.example.backend.rating.Rating;
import com.example.backend.teaching.Teaching;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeachingTests {

    private Teaching testTeaching;
    private Comment testComment1;
    private Comment testComment2;
    private List<Comment> testComments;
    private Rating testRating1;
    private Rating testRating2;
    private List<Rating> testRatings;

    @Before
    public void setUp() {
        testTeaching = new Teaching();
        testComment1 = new Comment();
        testComment2 = new Comment();
        testComments = new ArrayList<Comment>();
        testRating1 = new Rating();
        testRating2 = new Rating();
        testRatings = new ArrayList<Rating>();
    }

    @Test
    public void testIfNewIdIsNotNull() {
        assertFalse(Objects.isNull(testTeaching.getId()));
    }

    @Test
    public void testIfCorrectLengthArrayIsReturned() {
        testComments.add(testComment1);
        testComments.add(testComment2);
        testTeaching.setComments(testComments);
        testRatings.add(testRating1);
        testRatings.add(testRating2);
        testTeaching.setRatings(testRatings);
        assertEquals(2, testTeaching.getComments().size());
        assertEquals(2, testTeaching.getRatings().size());
    }
}
