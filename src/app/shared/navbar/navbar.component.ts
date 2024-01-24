import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
 
  constructor(public manageHome:AdminService ,private router :Router) {
    this.initializeUser();
    let toastr:ToastrService=inject (ToastrService) ;
  }

  initializeUser() {
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

    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user; 
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['auth/login'] );
    this.isLoggedIn = false;
  }
}
