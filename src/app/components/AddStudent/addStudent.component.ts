import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addStudent.component.html',
  styleUrls: ['./addStudent.component.scss'],
})
export class AddStudentComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildFrom();
  }

  buildFrom() {
    console.log('building form ----');
    this.newUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],

      // dob: [''],
    });
  }

  createUser() {
    console.log('creatting new user ...', this.newUserForm.value);
  }
}
