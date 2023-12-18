import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authData: any = {
    username: "",
    password: ""
  }
  constructor(public login:LoginService) {}
  ngOnInit(): void {}
  Auth(): void{
    this.login.Auth(this.authData);
  }
}
