package com.example.backend;

import com.example.backend.rating.Rating;
import org.hibernate.type.ByteType;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import sun.management.snmp.jvminstr.JvmThreadInstanceEntryImpl;

import java.util.Objects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RatingTests {

    private Rating testRating;

    @Before
    public void setUp() {
        testRating = new Rating();
    }

    @Test
    public void testIfNewIdIsNotNull() {
        assertFalse(Objects.isNull(testRating.getId()));
    }

    @Test
    public void testIfCorrectCommentIsReturned() {
        testRating.setRating(1);
        assertEquals(1, testRating.getRating());
    }
}
