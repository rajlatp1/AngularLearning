import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/password.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupForm: FormGroup;

  constructor(private router: Router) { 
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),passwordValidator()]),
  
    });
  
  }

  ngOnInit(): void {
  }
  get signup() { return this.signupForm.controls; }
  onSubmit(): void { 
    localStorage.setItem('isRegistered','true'); 
    this.router.navigate(['/todo-add']);

  }
}
