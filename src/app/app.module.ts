import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    DeleteDialogComponent,
    AboutusCreateFormComponent,
    AboutusFormComponent,
    ContactUsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
