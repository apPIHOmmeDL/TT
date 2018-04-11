package com.example.backend;

import com.example.backend.subject.Subject;
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
public class SubjectTests {

    private Subject testSubject;

    @Before
    public void setUp() {
        testSubject = new Subject();
    }

    @Test
    public void testIfNewIdIsNotNull() {
        assertFalse(Objects.isNull(testSubject.getId()));
    }

    @Test
    public void testIfCorrectNameIsReturned() {
        testSubject.setTitle("Tarkvaratehnika");
        assertEquals("Tarkvaratehnika", testSubject.getTitle());
    }
}
