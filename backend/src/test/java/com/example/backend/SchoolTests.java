package com.example.backend;

import com.example.backend.school.School;
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
public class SchoolTests {

    private School testSchool;

    @Before
    public void setUp() {
        testSchool = new School();
    }

    @Test
    public void testIfNewIdIsNotNull() {
        assertFalse(Objects.isNull(testSchool.getId()));
    }

    @Test
    public void testIfCorrectNameIsReturned() {
        testSchool.setName("TTÜ");
        assertEquals("TTÜ", testSchool.getName());
    }
}
