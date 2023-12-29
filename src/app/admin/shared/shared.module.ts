import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';



@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ]
})
export class SharedModule { }
