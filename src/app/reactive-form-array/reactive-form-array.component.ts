import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.scss']
})
export class ReactiveFormArrayComponent implements OnInit {

  title = "Reactive Form Array";
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      empName: ['', [Validators.required] ],
      empId: ['', [Validators.required] ],
      skills: this.fb.array([{skillName: ['', Validators.required]}])
    })
  }

  loginUser() {
    console.log('form Data: ', this.loginForm.value);
  }

  get frm() {
    return this.loginForm.controls;
  }

  get skills() {
    return this.loginForm.controls['skills'] as FormArray;
  }

  addSkills() {
    const skillForm = this.fb.group({
      skillName: ['', Validators.required]
    });

    this.skills.push(skillForm);
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
  }

}
