import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesList: Array<Course> = [];

  constructor(
    private service: CourseService
  ) { }

  ngOnInit() {
    this.service.getCourses().subscribe(
      (res) => {
        this.coursesList = res;
      }
    )
  }

}
