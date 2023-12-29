import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersManagementComponent } from './users-management/users-management.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { LibrariesManagementComponent } from './libraries-management/libraries-management.component';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';

const routes: Routes = [
  {
    path:'users',
    component: UsersManagementComponent
  },
  {
    path:'libraries',
    component: LibrariesManagementComponent
  },
  {
    path:'categories',
    component: CategoriesManagementComponent
  },
  {
    path:'books',
    component: BooksManagementComponent
  },
  {
    path:'reports',
    component: ReportsManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
