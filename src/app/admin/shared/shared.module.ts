import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
     FormsModule, 
     ReactiveFormsModule
  ],
  exports:[
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent,MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
     FormsModule, 
     ReactiveFormsModule

  ]
})
export class SharedModule { }
