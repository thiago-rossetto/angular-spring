import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataModal } from '../../models/dataModal.model';

@Component({
  selector: 'app-modal-courses',
  templateUrl: './modal-courses.component.html',
  styleUrls: ['./modal-courses.component.css']
})
export class ModalCoursesComponent implements OnInit {

  @Input() data!: DataModal;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
