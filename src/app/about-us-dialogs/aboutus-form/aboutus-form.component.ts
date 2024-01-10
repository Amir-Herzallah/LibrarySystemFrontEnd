import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AboutUsService } from 'src/app/Services/about-us.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-aboutus-form',
  templateUrl: './aboutus-form.component.html',
  styleUrls: ['./aboutus-form.component.css']
})
export class AboutusFormComponent {
  editAboutUs = new FormGroup ({
    aboutUspage_ID: new FormControl(Validators.required),
    header_component1: new FormControl("", Validators.required),
    paragraph1: new FormControl("", Validators.required),
    image_path1:  new FormControl("", Validators.required)
  })
  
  constructor(public aboutUs: AboutUsService, @Inject(MAT_DIALOG_DATA) public data: {id: any, title: any, content: any, image: any}) {}

  Save(): void {
    this.editAboutUs.controls["aboutUspage_ID"].setValue(this.data.id);
    this.aboutUs.UpdateAboutUsPageData(this.editAboutUs.value);
  }

  UploadImage(file: any){
    if(file.length == 0) return ;

    let fileToUpload = <File> file[0];
    const formData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    this.aboutUs.uploadAttachment(formData)
  }
 }
