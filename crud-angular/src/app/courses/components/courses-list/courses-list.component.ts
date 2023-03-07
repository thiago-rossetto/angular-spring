import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Course } from '../../models/course.model';
import { DataModal } from '../../models/dataModal.model';
import { CourseService } from '../../services/course.service';
import { ModalCoursesComponent } from '../modal-courses/modal-courses.component';
import { ModalDeleteCourseComponent } from '../modal-delete-course/modal-delete-course.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/assets/toaster.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  coursesList: Array<Course> = [];
  enpityList: boolean = false;
  loadListError: boolean = false;

  constructor(
    private service: CourseService,
    private modal: NgbModal,
    private toastr: ToasterService
  ) { }

  ngOnInit() {
    this.service.getCourses().subscribe(
      (res) => {
        this.coursesList = res;
        this.coursesList.length === 0 ? this.enpityList = true : this.enpityList = false;
        this.loadListError = false;
      },
      (err) => {
        this.toastr.error("Não possivel carregar a lista de cursos!");
        this.loadListError = true;
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

    modal.componentInstance.refreshList.subscribe( () => {
      this.ngOnInit();
    })
  }

  openModalDeleteCourse(id?: number): void {
    const modal = this.modal.open(ModalDeleteCourseComponent, {
      size: 'md',
      centered: true,
      keyboard: false,
      backdrop: 'static'
    });

    modal.componentInstance.id = id;

    modal.componentInstance.refreshList.subscribe( () => {
      this.ngOnInit();
    })
  }

}
