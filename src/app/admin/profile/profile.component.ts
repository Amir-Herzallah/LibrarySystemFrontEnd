import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  editProfile: FormGroup = new FormGroup({
    user_Id: new FormControl(""),
    first_Name: new FormControl("", Validators.required),
    last_Name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone_Number: new FormControl("", Validators.required),
    profile_Img_Path: new FormControl("")
  })

  constructor(public profile:ProfileService) {}
  ngOnInit(): void {
    this.profile.GetUserProfile();
    this.profile.display_image = this.editProfile.value.profile_Img_Path;
  }
  UpdateProfile(){
    this.editProfile.controls["user_Id"].setValue(this.profile.userInfo.user_Id);
    this.profile.UpdateProfile(this.profile.userInfo.user_Id, this.editProfile.value);
    console.log(this.editProfile.value);

  }

  UploadImage(file: any){
    if(file.length == 0) return ;

    let fileToUpload = <File> file[0];
    const formData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    this.profile.uploadAttachment(formData)
  }
}
