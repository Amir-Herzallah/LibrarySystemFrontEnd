import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AboutusCreateFormComponent } from './aboutus/about-us-dialogs/aboutus-create-form/aboutus-create-form.component';
import { DeleteDialogComponent } from './aboutus/about-us-dialogs/delete-dialog/delete-dialog.component';
import { AboutusFormComponent } from './aboutus/about-us-dialogs/aboutus-form/aboutus-form.component';
import { ContactUsDialogComponent } from './contactus/contact-us-dialog/contact-us-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LibrariesComponent } from './libraries/libraries.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';  // Add this line for MatTableModule
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CategoriesComponent } from './categories/categories.component';
import { MultiSearchPipe } from './pipes/multi-search.pipe';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AccountComponent } from './account/account.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { ProfileEditComponent } from './account/profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    DeleteDialogComponent,
    AboutusCreateFormComponent,
    AboutusFormComponent,
    ContactUsDialogComponent,
    LibrariesComponent,
    BooksComponent,
    CategoriesComponent,
    MultiSearchPipe,
    TestimonialComponent,
    AccountComponent,
    MyBooksComponent,
    ProfileEditComponent
      ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    MatTabsModule,
    MatInputModule ,
    MatDialogModule,
    BrowserModule, 
     MatTableModule,
     MatDatepickerModule,
     MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
