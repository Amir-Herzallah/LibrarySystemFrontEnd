import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ViewChild} from '@angular/core';
//import { DateReportsFilterPipe } from 'src/app/pipes/date-reports-filter.pipe';
import { DateRangePipe } from 'src/app/pipes/date-range.pipe';

@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
   // DateReportsFilterPipe
    DateRangePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
     FormsModule, 
     ReactiveFormsModule,

  ],
  exports:[
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    CommonModule,
    RouterModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    AdminFooterComponent,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    // DateReportsFilterPipe
    DateRangePipe
  ]
})
export class SharedModule { }
