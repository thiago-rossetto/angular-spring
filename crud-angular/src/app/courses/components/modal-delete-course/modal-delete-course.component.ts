import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/assets/toaster.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-modal-delete-course',
  templateUrl: './modal-delete-course.component.html',
  styleUrls: ['./modal-delete-course.component.css']
})
export class ModalDeleteCourseComponent implements OnInit {

  @Input() id!: number;
  @Output() refreshList = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    private service: CourseService,
    private toarter: ToasterService
  ) { }

  ngOnInit() {
  }

  deleteCourse(): void {
    this.service.deleteCourse(this.id)
      .subscribe(
        () => {
          this.toarter.success("Curso excluido!");
          this.activeModal.close();
          this.refreshList.emit();
        },
        (err) => {
          this.toarter.success("Não foi possivel excluir o curso!");
        }
      )
  }

}
