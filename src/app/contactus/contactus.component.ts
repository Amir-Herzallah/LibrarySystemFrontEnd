import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ContactUsService } from '../services/contact-us.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from './contact-us-dialog/contact-us-dialog.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactUsMessage = new FormGroup({
    fullName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  })

  constructor(public contactUs:ContactUsService, public dialog:MatDialog) {}
  ngOnInit(): void {
    this.contactUs.GetAllContactUsPage(); 
  }

  openDialog(body: any) {
    this.dialog.open(ContactUsDialogComponent, {data: {id: body.contactuspagE_ID, header: body.headeR_COMPONENT1, paragraph: body.paragraph1, email: body.email, subject: body.subject, message: body.message}})
  }

  CreateContactUsRequest() {
    this.contactUs.CreateContactUsRequest(this.contactUsMessage.value);
    this.contactUsMessage.reset();
  }
  
}
