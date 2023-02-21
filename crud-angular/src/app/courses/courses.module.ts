import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { ModalCoursesComponent } from './modals/modal-courses/modal-courses.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    ModalCoursesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    FormsModule
  ]
})
export class CoursesModule { }