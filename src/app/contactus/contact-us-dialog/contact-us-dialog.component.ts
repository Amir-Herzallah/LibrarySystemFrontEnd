import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us-dialog',
  templateUrl: './contact-us-dialog.component.html',
  styleUrls: ['./contact-us-dialog.component.css']
})
export class ContactUsDialogComponent {
  editContactus = new FormGroup({
    contactuspagE_ID: new FormControl(""),
    email: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),
    headeR_COMPONENT1: new FormControl("", Validators.required),
    paragraph1: new FormControl("", Validators.required)
  })

  constructor(public contactUs:ContactUsService, @Inject(MAT_DIALOG_DATA) public data: {id: string, header: string, paragraph: string, email: string, subject: string, message: string}) {}

  Save() {
    console.log("id: " + this.data.id);
    this.editContactus.controls["contactuspagE_ID"].setValue(this.data.id)
    this.contactUs.EditContactUsPage(this.editContactus.value);
    window.location.reload();
  }
}
