import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.scss']
})
export class ReactiveFormBuilderComponent implements OnInit {

  title = "Reactive Form Builder";
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      user: ['test@gmail.com', [Validators.required, Validators.email] ],
      password: ['1234', [Validators.required, Validators.minLength(5)] ]
    })
  }

  loginUser() {
    console.log('form Data: ', this.loginForm.value);
  }

  get frm() {
    return this.loginForm.controls;
  }

}
