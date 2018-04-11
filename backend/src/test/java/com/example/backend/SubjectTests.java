package com.example.backend;

import com.example.backend.subject.Subject;
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
public class SubjectTests {

    private Subject testSubject;
    private Teaching testTeaching1;
    private Teaching testTeaching2;
    private List<Teaching> testTeachings;

    @Before
    public void setUp() {
        testSubject = new Subject();
        testTeaching1 = new Teaching();
        testTeaching2 = new Teaching();
        testTeachings = new ArrayList<Teaching>();
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

    @Test
    public void testIfCorrectLengthArrayIsReturned() {
        testTeachings.add(testTeaching1);
        testTeachings.add(testTeaching2);
        testSubject.setTeachings(testTeachings);
        assertEquals(2, testSubject.getTeachings().size());
    }
}
