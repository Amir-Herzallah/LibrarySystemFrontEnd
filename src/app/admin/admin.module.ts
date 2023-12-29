import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { LibrariesManagementComponent } from './libraries-management/libraries-management.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    ReportsManagementComponent,
    LibrariesManagementComponent,
    BooksManagementComponent,
    UsersManagementComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
