import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { ModalCoursesComponent } from './components/modal-courses/modal-courses.component';
import { ModalDeleteCourseComponent } from './components/modal-delete-course/modal-delete-course.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CoursesListComponent,
    ModalCoursesComponent,
    ModalDeleteCourseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    FormsModule,
    NgbTooltipModule
  ]
})
export class CoursesModule { }