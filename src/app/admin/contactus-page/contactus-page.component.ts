import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-contactus-page',
  templateUrl: './contactus-page.component.html',
  styleUrls: ['./contactus-page.component.css']
})
export class ContactusPageComponent {
  @ViewChild('callCreateContactUspageDialog') callCreateContactUspageDialog !: TemplateRef<any>
  @ViewChild('callDeleteContactUspageDailog') callDeleteContactUspageDailog!: TemplateRef<any>
  @ViewChild('callUpdateContactUspageDialog') callUpdateContactUspageDialog !: TemplateRef<any>

  constructor(public adminService: AdminService, public dialog: MatDialog, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.adminService.GetAllContactUsData()
  }

  contactUspage_pData: any;

  createContactUsPageForm: FormGroup = new FormGroup({
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

  OpenCreateContactUspageDialog() {
    this.dialog.open(this.callCreateContactUspageDialog);
  }

  SaveContactUspageInfo() {
    this.adminService.CreateContactUsPage(this.createContactUsPageForm.value)
  }

  UploadContactUspageImage(file: any) {
    if (file.length == 0) return;
    let fileToUlpoad = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.adminService.UploadAttachment(formData);
  }

  DeleteContactUspageDialog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteContactUspageDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == '1') {
        this.adminService.DeleteContactUsPage(id);
      }
      else {
        this.toastr.error('Contact Us Page Not Deleted');
      }
    })
  }

  updateContactUsPageForm: FormGroup = new FormGroup({
    contactuspagE_ID: new FormControl(),
    logO_PATH: new FormControl(),
    email: new FormControl(),
    subject: new FormControl(),
    message: new FormControl(),
    headeR_COMPONENT1: new FormControl(),
    headeR_COMPONENT2: new FormControl(),
    headeR_COMPONENT3: new FormControl(),
    paragraph1: new FormControl(),
    paragraph2: new FormControl(),
    paragraph3: new FormControl(),
    footeR_COMPONENT1: new FormControl(),
    footeR_COMPONENT2: new FormControl(),
    footeR_COMPONENT3: new FormControl()
  })
  
  OpenUpdateContactUspageDailog(obj: any) {
    this.contactUspage_pData = obj;
    this.updateContactUsPageForm.controls['contactuspagE_ID'].setValue(this.contactUspage_pData.contactuspagE_ID);
    this.adminService.display_image = this.contactUspage_pData.logO_PATH;
    this.dialog.open(this.callUpdateContactUspageDialog);
  }

  UpdateContactUspage() {
    this.adminService.UpdateContactUsPage(this.updateContactUsPageForm.value)
  }
  UploadContactUsImage(file: any) {
    if (file.length == 0) return;
    let fileToUlpoad = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.adminService.UploadAttachment(formData);
  }
}
