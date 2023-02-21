import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-course',
  templateUrl: './modal-delete-course.component.html',
  styleUrls: ['./modal-delete-course.component.css']
})
export class ModalDeleteCourseComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
