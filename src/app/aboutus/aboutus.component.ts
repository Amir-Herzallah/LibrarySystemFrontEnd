import { Component } from '@angular/core';
import { AboutUsService } from '../Services/about-us.service';
import { MatDialog } from '@angular/material/dialog';
import { AboutusFormComponent } from '../about-us-dialogs/aboutus-form/aboutus-form.component';
import { AboutusCreateFormComponent } from '../about-us-dialogs/aboutus-create-form/aboutus-create-form.component';
import { DeleteDialogComponent } from '../about-us-dialogs/delete-dialog/delete-dialog.component';



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
    //console.log(obj);
    //this.updateCourse.controls["courseID"].setValue(this.pData.courseID);
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
