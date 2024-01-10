import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup( {
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  constructor(public auth: AuthService) {}


  Login() {
    this.auth.Login(this.loginForm.value);
  } 
}
