import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersManagementComponent } from './users-management/users-management.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { LibrariesManagementComponent } from './libraries-management/libraries-management.component';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { PagesManagementComponent } from './pages-management/pages-management.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    UsersManagementComponent,
    BooksManagementComponent,
    ReportsManagementComponent,
    LibrariesManagementComponent,
    CategoriesManagementComponent,
    DashboardComponent,
    PagesManagementComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
