import { Component } from '@angular/core';
import { AboutUsService } from '../services/about-us.service';
import { MatDialog } from '@angular/material/dialog';
import { AboutusFormComponent } from './about-us-dialogs/aboutus-form/aboutus-form.component';
import { AboutusCreateFormComponent } from './about-us-dialogs/aboutus-create-form/aboutus-create-form.component';
import { DeleteDialogComponent } from './about-us-dialogs/delete-dialog/delete-dialog.component';



@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  pData: any;
  constructor(public aboutUs: AboutUsService, public dialog:MatDialog) {}
  ngOnInit(): void {
     this.aboutUs.GetAllAboutUsPageData(); 
  }


  OpenUpdateDialog(obj: any) {

    this.aboutUs.display_image = obj.imagE_PATH1
    this.dialog.open(AboutusFormComponent, {data: {id: obj.aboutuspagE_ID ,title: obj.headeR_COMPONENT1, content: obj.paragraph1, image: obj.imagE_PATH1}});
  }

  OpenCreateeDialog() {
    this.dialog.open(AboutusCreateFormComponent);
  }

  OpenDeleteDialog(id: number) {
    this.dialog.open(DeleteDialogComponent, {data: {id: id}});

  }
}
