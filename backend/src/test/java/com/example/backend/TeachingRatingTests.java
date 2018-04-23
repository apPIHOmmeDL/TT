package com.example.backend;

import com.example.backend.teachingRating.TeachingRating;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Objects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeachingRatingTests {

    private TeachingRating testTeachingRating;

    @Before
    public void setUp() {
        testTeachingRating = new TeachingRating();
    }

    @Test
    public void testIfNewIdIsNotNull() {
        assertFalse(Objects.isNull(testTeachingRating.getId()));
    }

    @Test
    public void testIfCorrectCommentIsReturned() {
        testTeachingRating.setRating(1);
        assertEquals(1, testTeachingRating.getRating());
    }


}
