import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: any = localStorage.getItem("user");
  userID: number | null = null;

  constructor() {
    this.initializeUser();
  }

  initializeUser() {
    if (this.user) {
      const userData = JSON.parse(this.user);
      this.userID = userData.userID;
    } 
  }
}
