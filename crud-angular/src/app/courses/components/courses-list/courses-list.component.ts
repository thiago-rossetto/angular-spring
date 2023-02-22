import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Course } from '../../models/course.model';
import { DataModal } from '../../models/dataModal.model';
import { CourseService } from '../../services/course.service';
import { ModalCoursesComponent } from '../modal-courses/modal-courses.component';
import { ModalDeleteCourseComponent } from '../modal-delete-course/modal-delete-course.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesList: Array<Course> = [];

  constructor(
    private service: CourseService,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.service.getCourses().subscribe(
      (res) => {
        this.coursesList = res;
      }
    )
  }

  openModal(action: string, course?: Course): void {
    const modal = this.modal.open(ModalCoursesComponent, {
      size: 'md',
      centered: true,
      keyboard: false,
      backdrop: 'static'
    });

    const dataModal: DataModal= {
      action: action,
      course: {
        name: !course ? "" : course.name,
        category: !course ? "" : course.category,
        id: !course ? undefined : course.id
      }
    }

    modal.componentInstance.data = dataModal;
  }

  openModalDeleteCourse(): void {
    const modal = this.modal.open(ModalDeleteCourseComponent, {
      size: 'md',
      centered: true,
      keyboard: false,
      backdrop: 'static'
    });
  }

}
