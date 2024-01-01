import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
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
    MatInputModule
  ]
})
export class SharedModule { }
