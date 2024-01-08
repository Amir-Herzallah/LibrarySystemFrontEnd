import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { AccountComponent } from '../account/account.component';
//import { DateFilterPipe } from '../pipes/date-filter.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
   // DateFilterPipe

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    NavbarComponent,
    FooterComponent,
    FooterComponent,
    FormsModule,

  ]
})
export class SharedModule { }