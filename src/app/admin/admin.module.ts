import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { AdminRoutingModule } from './admin-routing.module';
import { UsersManagementComponent } from './users-management/users-management.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { LibrariesManagementComponent } from './libraries-management/libraries-management.component';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    UsersManagementComponent,
    BooksManagementComponent,
    ReportsManagementComponent,
    LibrariesManagementComponent,
    CategoriesManagementComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
=======

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
>>>>>>> 7b977c0ec7fbf905419c5121f3776d26f819c34d
  ]
})
export class AdminModule { }
