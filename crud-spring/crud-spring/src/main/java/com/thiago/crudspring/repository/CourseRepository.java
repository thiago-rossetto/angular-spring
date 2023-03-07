package com.thiago.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiago.crudspring.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
    
}
