import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {
  loginForm: FormGroup
  isLoading: boolean;
  constructor(
    public formBuilder: FormBuilder,
    public router : Router,
    public loginService : AuthService
  ) { }

  ngOnInit(): void {
    this.createLoginFormGroup();
  }

  createLoginFormGroup() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.invalid) {
      alert('PLease fill form');
      this.isLoading = false;
      return;
    }
    this.isLoading = false;
    this.loginService.loginService();
    
  }
}
