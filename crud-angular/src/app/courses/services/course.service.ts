import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }
  
  getCourses() {
    return this.http.get<Course[]>(environment.api + '/courses');
  }

  postCourse(course: Course) {
    return this.http.post<Course>(environment.api + '/courses', course);
  }

  putCourse(course: Course) {
    return this.http.put<Course>(environment.api + `/courses/${course.id}`, course);
  }

  deleteCourse(id: number) {
    return this.http.delete<Course>(environment.api + `/courses/${id}`);
  }
}
