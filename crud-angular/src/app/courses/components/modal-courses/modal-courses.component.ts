import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/assets/toaster.service';

import { DataModal } from '../../models/dataModal.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-modal-courses',
  templateUrl: './modal-courses.component.html',
  styleUrls: ['./modal-courses.component.css']
})
export class ModalCoursesComponent implements OnInit {

  @Input() data!: DataModal;
  @Output() refreshList = new EventEmitter();

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl('')
  });
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private service: CourseService,
    private toaster: ToasterService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: [
          this.data.course.name,
          [
            Validators.required,
            Validators.maxLength(200)
          ]
        ],
        category: [
          this.data.course.category, 
          [
            Validators.required,
            Validators.maxLength(10)
          ]
        ]
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.decideAction();
  }

  decideAction(): void {
    const decide: any = {
      'add': () => this.addCourse(),
      'edit': () => false
    }
    decide[this.data.action]();
  }

  addCourse(): void {
    this.service.postCourse(this.form.value)
      .subscribe(
        () => {
          this.toaster.success("Novo curso adicionado!");
          this.closeModalAndRefreshList();
        },
        (err) => {
          this.toaster.error("Não possível adicionar um novo curso!");
        }
      )
  }

  closeModalAndRefreshList(): void {
    this.activeModal.close();
    this.refreshList.emit();
  }

}
