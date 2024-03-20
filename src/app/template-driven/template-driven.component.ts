import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  title = "Template Driven Form";

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(items:any) {
    console.log('form Data: ', items);
  }

}
