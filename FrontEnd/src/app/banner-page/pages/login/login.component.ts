import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent {

  LoginForm: any //initialization

  constructor(private router:Router, private fb:FormBuilder){
  this.LoginForm = this.fb.group({
    email: [''],
    password: ['']
  })  }


  submit(){
    let value = this.LoginForm.value
    console.log(value)
    this.router.navigate(['/dashboard'])
  }
}

