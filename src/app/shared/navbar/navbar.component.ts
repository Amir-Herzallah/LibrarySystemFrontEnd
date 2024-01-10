import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user:any = localStorage.getItem("user");
  userID:any = JSON.parse(this.user).userID;
}
