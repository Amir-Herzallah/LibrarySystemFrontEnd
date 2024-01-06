import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin.module';
import { UsersManagementComponent } from './users-management/users-management.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { LibrariesManagementComponent } from './libraries-management/libraries-management.component';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesManagementComponent } from './pages-management/pages-management.component';
import { BorrowedbooksComponent } from './borrowedbooks/borrowedbooks.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
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
  },
{
  path:'pages',
  component:PagesManagementComponent
},
{
  path:'borrowedbooks' ,
  component: BorrowedbooksComponent,
 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
