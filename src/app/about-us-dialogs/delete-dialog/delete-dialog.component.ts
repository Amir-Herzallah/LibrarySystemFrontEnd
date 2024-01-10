import { Component, Inject } from '@angular/core';
import { AboutUsService } from 'src/app/Services/about-us.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  constructor(public aboutUs: AboutUsService, @Inject(MAT_DIALOG_DATA) public data: {id: any}) {}

  Delete(): void {
    this.aboutUs.DeleteAboutUsPageData(this.data.id);
  }
}
