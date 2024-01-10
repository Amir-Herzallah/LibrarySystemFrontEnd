import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-testimonial-page',
  templateUrl: './testimonial-page.component.html',
  styleUrls: ['./testimonial-page.component.css']
})
export class TestimonialPageComponent {
  
  @ViewChild('callCreateTestimonialpageDialog') callCreateTestimonialpageDialog !: TemplateRef<any>
  @ViewChild('callDeleteTestimonialpageDailog') callDeleteTestimonialpageDailog!: TemplateRef<any>
  @ViewChild('callUpdateTestimonialpageDialog') callUpdateTestimonialpageDialog !: TemplateRef<any>

  constructor(public adminService: AdminService, public dialog: MatDialog, private tostr: ToastrService) { }
  ngOnInit(): void {
    this.adminService.GetAllTestimonialData();
  }

  createTestimonialpageForm: FormGroup = new FormGroup({
    title: new FormControl(),
    header_Component1: new FormControl(),
    header_Component2: new FormControl(),
    header_Component3: new FormControl(),
    paragraph1: new FormControl(),
    paragraph2: new FormControl(),
    paragraph3: new FormControl(),
    footer_Component1: new FormControl(),
    footer_Component2: new FormControl(),
    footer_Component3: new FormControl(),
    imagePath1: new FormControl(),
    imagePath2: new FormControl()
  })
  
  OpenCreateTestimonialpageDialog() {
    this.dialog.open(this.callCreateTestimonialpageDialog);
  }
  
  SaveTestimonialpageInfo() {
    this.adminService.CreateTestimonialPage(this.createTestimonialpageForm.value)
  }
  
  UploadTestimonialpageImage(file: any) {
    if (file.length == 0) return;
    let fileToUlpoad = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUlpoad, fileToUlpoad.name);
    this.adminService.UploadAttachment(formData);
  }
  
  DeleteTestimonialpageDialog(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteTestimonialpageDailog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result == '1') {
        this.adminService.DeleteTestimonialPage(id);
      }
      else {
        console.log('Thank you ');
      }
    })
  }

  testimonialPage_pData: any;

  updateTestimonialpageForm: FormGroup = new FormGroup({
    testimonialpage_Id: new FormControl(),
    title: new FormControl(),
    header_Component2: new FormControl(),
    header_Component1: new FormControl(),
    header_Component3: new FormControl(),
    paragraph1: new FormControl(),
    paragraph2: new FormControl(),
    paragraph3: new FormControl(),
    footer_Component1: new FormControl(),
    footer_Component2: new FormControl(),
    footer_Component3: new FormControl(),
    imagePath1: new FormControl(),
    imagePath2: new FormControl()
  })

  OpenUpdateTestimonialpageDailog(obj: any) {
    this.testimonialPage_pData = obj;
    this.updateTestimonialpageForm.controls['testimonialpage_Id'].setValue(this.testimonialPage_pData.testimonialpage_Id);
    this.dialog.open(this.callUpdateTestimonialpageDialog);
  }

  UpdateTestimonialpage() {
    this.adminService.UpdateTestimonialPage(this.updateTestimonialpageForm.value)
  }
}
