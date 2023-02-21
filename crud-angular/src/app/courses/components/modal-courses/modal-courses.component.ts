import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DataModal } from '../../models/dataModal.model';

@Component({
  selector: 'app-modal-courses',
  templateUrl: './modal-courses.component.html',
  styleUrls: ['./modal-courses.component.css']
})
export class ModalCoursesComponent implements OnInit {

  @Input() data!: DataModal;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl('')
  });
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
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

    console.log(JSON.stringify(this.form.value, null, 2));

    this.activeModal.close();
  }

}
