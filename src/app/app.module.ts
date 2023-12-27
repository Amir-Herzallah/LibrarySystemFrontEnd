import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AboutusFormComponent } from './about-us-dialogs/aboutus-form/aboutus-form.component';
import { ToastrModule } from 'ngx-toastr';
import { DeleteDialogComponent } from './about-us-dialogs/delete-dialog/delete-dialog.component';
import { AboutusCreateFormComponent } from './about-us-dialogs/aboutus-create-form/aboutus-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AboutusFormComponent,
    DeleteDialogComponent,
    AboutusCreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
