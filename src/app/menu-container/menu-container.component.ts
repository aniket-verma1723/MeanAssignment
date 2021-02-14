import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {
  loginForm: FormGroup;
  categories: string[] = ['Mini Thali','Meals','Snacks'];
  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormGroup();
  }
  createFormGroup() {
    this.loginForm = this.fb.group({
      name: '',
      small: '',
      large: '',
      category: ''
    })
  }
  resetForm() {
    this.loginForm.reset();
  }
  onSubmit(){

  }
}
