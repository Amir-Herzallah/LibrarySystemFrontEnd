import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-aboutus-page',
  templateUrl: './aboutus-page.component.html',
  styleUrls: ['./aboutus-page.component.css']
})

export class AboutusPageComponent {
  @ViewChild('callCreateAboutUspageDialog') callCreateAboutUspageDialog !: TemplateRef<any>
  @ViewChild('callDeleteAboutUspageDailog') callDeleteAboutUspageDailog!: TemplateRef<any>
  @ViewChild('callUpdateAboutUspageDialog') callUpdateAboutUspageDialog !: TemplateRef<any>

  constructor(public adminService: AdminService, public dialog: MatDialog, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.adminService.GetAllAboutUsData()
  }

  aboutUspage_pData: any;

  createAboutUsPageForm: FormGroup = new FormGroup({
    logO_PATH: new FormControl(),
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
    imagE_PATH2: new FormControl()
  })

  OpenCreateAboutUspageDialog() {
    this.dialog.open(this.callCreateAboutUspageDialog);
  }

  SaveAboutUspageInfo() {
    this.adminService.CreateAboutUsPage(this.createAboutUsPageForm.value)
  }

  UploadAboutUspageImage(file: any) {
    if (file.length == 0) return;
    let fileToUlpoad = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.adminService.UploadAttachment(formData);
  }

  DeleteAboutUspageDialog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteAboutUspageDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == '1') {
        this.adminService.DeleteAboutUsPage(id);
        this.toastr.success('About Us Page Deleted Successfully');
      }
      else {
        this.toastr.error('About Us Page Not Deleted');
      }
    })
  }

  updateAboutUsPageForm: FormGroup = new FormGroup({
    aboutuspagE_ID: new FormControl(),
    logO_PATH: new FormControl(),
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
    imagE_PATH2: new FormControl()
  })
  
  OpenUpdateAboutUspageDailog(obj: any) {
    this.aboutUspage_pData = obj;
    this.updateAboutUsPageForm.controls['aboutuspagE_ID'].setValue(this.aboutUspage_pData.aboutuspagE_ID);
    this.adminService.display_image = this.aboutUspage_pData.imagename;
    this.dialog.open(this.callUpdateAboutUspageDialog);
  }

  UpdateAboutUspage() {
    this.adminService.UpdateHomepage(this.updateAboutUsPageForm.value)
  }
  UploadAboutUsImage(file: any) {
    if (file.length == 0) return;
    let fileToUlpoad = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.adminService.UploadAttachment(formData);
  }
}
