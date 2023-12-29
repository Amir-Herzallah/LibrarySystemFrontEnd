import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersManagementComponent } from './users-management/users-management.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { LibrariesManagementComponent } from './libraries-management/libraries-management.component';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';


@NgModule({
  declarations: [
    UsersManagementComponent,
    BooksManagementComponent,
    ReportsManagementComponent,
    LibrariesManagementComponent,
    CategoriesManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
