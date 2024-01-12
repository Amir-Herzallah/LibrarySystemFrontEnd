import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: any = localStorage.getItem("user");
  userID: number | null = null;
  isLoggedIn: boolean | undefined;

  constructor(public manageHome:AdminService) {
    this.initializeUser();
  }

  initializeUser() {
    debugger;
    if (this.user) {
      const userData = JSON.parse(this.user);
      this.userID = userData.userID;
    } 
  }
  

  ngOnInit() {
    this.checkLoginStatus();
    
    this.manageHome.GetAllHomepageData()
  }

  checkLoginStatus() {
    debugger;
    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user; // Convert to boolean: true if user exists, false otherwise
  }

  signOut() {
    debugger;
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    // Add any other logic needed when signing out, like redirecting the user
  }
}
