import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin.module';
import { UsersManagementComponent } from './users-management/users-management.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { LibrariesManagementComponent } from './libraries-management/libraries-management.component';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersManagementComponent
  },
  {
    path: 'libraries',
    component: LibrariesManagementComponent
  },
  {
    path: 'categories',
    component: CategoriesManagementComponent
  },
  {
    path: 'books',
    component: BooksManagementComponent
  },
  {
    path: 'reports',
    component: ReportsManagementComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'aboutus-page',
    component: AboutusPageComponent
  },
  {
    path: 'contactus-page',
    component: ContactusPageComponent
  },
  {
    path: 'testimonial-page',
    component: TestimonialPageComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
