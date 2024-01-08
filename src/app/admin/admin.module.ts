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
import { BorrowedbooksComponent } from './borrowedbooks/borrowedbooks.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { ProfileComponent } from './profile/profile.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { DateReportsFilterPipe } from 'src/app/pipes/date-reports-filter.pipe';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    UsersManagementComponent,
    BooksManagementComponent,
    ReportsManagementComponent,
    LibrariesManagementComponent,
    CategoriesManagementComponent,
    DashboardComponent,
    BorrowedbooksComponent,
    HomePageComponent,
    AboutusPageComponent,
    TestimonialPageComponent,
    ContactusPageComponent,
    ProfileComponent,
    DateReportsFilterPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule
  ],

})
export class AdminModule { }
