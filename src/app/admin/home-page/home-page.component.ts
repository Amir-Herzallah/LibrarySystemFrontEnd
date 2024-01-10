
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  @ViewChild('callCreateHomepageDialog') callCreateHomepageDialog !: TemplateRef<any>
  @ViewChild('callDeleteHomepageDailog') callDeleteHomepageDailog!: TemplateRef<any>
  @ViewChild('callUpdateHomepageDialog') callUpdateHomepageDialog !: TemplateRef<any>

  constructor(public adminService: AdminService, public dialog: MatDialog, private tostr: ToastrService) { }
  ngOnInit(): void {
    this.adminService.GetAllHomepageData()
  }

  homepage_pData: any;

  createHomepageForm: FormGroup = new FormGroup({
    title: new FormControl(),
    headeR_COMPONENT1: new FormControl(),
    headeR_COMPONENT2: new FormControl(),
    headeR_COMPONENT3: new FormControl(),
    paragraph1: new FormControl(),
    paragraph2: new FormControl(),
    paragraph3: new FormControl(),
    footeR_COMPONENT1: new FormControl(),
    footeR_COMPONENT2: new FormControl(),
    footeR_COMPONENT3: new FormControl(),
    imagE_PATH1: new FormControl(),
    imagE_PATH2: new FormControl(),
    logO_PATH: new FormControl()
  })

  updateHomepageForm: FormGroup = new FormGroup({
    homepagE_ID: new FormControl(),
    title: new FormControl(),
    headeR_COMPONENT1: new FormControl(),
    headeR_COMPONENT2: new FormControl(),
    headeR_COMPONENT3: new FormControl(),
    paragraph1: new FormControl(),
    paragraph2: new FormControl(),
    paragraph3: new FormControl(),
    footeR_COMPONENT1: new FormControl(),
    footeR_COMPONENT2: new FormControl(),
    footeR_COMPONENT3: new FormControl(),
    imagE_PATH1: new FormControl(),
    imagE_PATH2: new FormControl(),
    logO_PATH: new FormControl()
  })

  OpenCreateHomepageDialog() {
    this.dialog.open(this.callCreateHomepageDialog);
  }

  SaveHomepageInfo() {
    this.adminService.CreateHomepage(this.createHomepageForm.value)
  }

  UploadHomepageImage(file: any) {
    if (file.length == 0) return;
    let fileToUlpoad = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.adminService.UploadAttachment(formData);
  }

  DeleteHomepageDialog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteHomepageDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == '1') {
        this.adminService.DeleteHomePage(id);
      }
      else {
        console.log('Thank you ');
      }
    })
  }

  OpenUpdateHomepageDailog(obj: any) {
    this.homepage_pData = obj;
    this.updateHomepageForm.controls['homepagE_ID'].setValue(this.homepage_pData.homepagE_ID);
    this.dialog.open(this.callUpdateHomepageDialog);
  }

  UpdateHomepage() {
    this.adminService.UpdateHomepage(this.updateHomepageForm.value)
  }
}
