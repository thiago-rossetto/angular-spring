import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesList: Array<any> = [];

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
