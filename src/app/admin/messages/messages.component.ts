import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  @ViewChild('callDeleteDailog') callDeleteDialog !: TemplateRef<any>;

  constructor(public contactUs: ContactUsService, public dialog: MatDialog, public toaster: ToastrService) { }

  ngOnInit(): void {
    this.contactUs.GetAllContactUsMessages();
  }

  DeleteMessage(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes') {
        this.contactUs.DeleteMessage(id);
      }
      else {
        this.toaster.error("Message Not Deleted");
      }
    });
  }
}
