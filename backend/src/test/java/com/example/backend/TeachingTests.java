package com.example.backend;

import com.example.backend.teaching.Teaching;
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
public class TeachingTests {

    private Teaching testTeaching;

    @Before
    public void setUp() {
        testTeaching = new Teaching();
    }

    @Test
    public void testIfNewIdIsNotNull() {
        assertFalse(Objects.isNull(testTeaching.getId()));
    }
}
