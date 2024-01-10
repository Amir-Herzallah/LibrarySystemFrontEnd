import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AboutUsService } from 'src/app/Services/about-us.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-aboutus-create-form',
  templateUrl: './aboutus-create-form.component.html',
  styleUrls: ['./aboutus-create-form.component.css']
})
export class AboutusCreateFormComponent {
  CreateAboutUs = new FormGroup ({
    header_component1: new FormControl("", Validators.required),
    paragraph1: new FormControl("", Validators.required),
    image_path1:  new FormControl("", Validators.required)
  })

  constructor(public aboutUs: AboutUsService) {}

  Save(): void {
    this.aboutUs.CreateAboutUsPageData(this.CreateAboutUs.value);
  }

  UploadImage(file: any){
    if(file.length == 0) return ;

    let fileToUpload = <File> file[0];
    const formData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    this.aboutUs.uploadAttachment(formData)
  }
}
