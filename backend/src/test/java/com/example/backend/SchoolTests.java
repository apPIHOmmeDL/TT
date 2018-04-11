package com.example.backend;

import com.example.backend.school.School;
import com.example.backend.subject.Subject;
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
public class SchoolTests {

    private School testSchool;
    private Subject testSubject1;
    private Subject testSubject2;
    private List<Subject> testSubjects;

    @Before
    public void setUp() {
        testSchool = new School();
        testSubject1 = new Subject();
        testSubject2 = new Subject();
        testSubjects = new ArrayList<Subject>();
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

    @Test
    public void testIfCorrectLengthArrayIsReturned() {
        testSubjects.add(testSubject1);
        testSubjects.add(testSubject2);
        testSchool.setSubjects(testSubjects);
        assertEquals(2, testSchool.getSubjects().size());
    }
}
