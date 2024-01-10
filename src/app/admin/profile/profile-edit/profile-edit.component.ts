import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  constructor(public profile:ProfileService) {}
ngOnInit(): void {
  this.profile.GetUserProfile();

  console.log(this.profile.userInfo);
}

editProfile: FormGroup = new FormGroup({
  user_Id: new FormControl(""),
  first_Name: new FormControl("", Validators.required),
  last_Name: new FormControl("", Validators.required),
  email: new FormControl("", Validators.required),
  phone_Number: new FormControl("", Validators.required),
  profile_Img_Path: new FormControl("")
})

UpdateProfile(){
  this.editProfile.controls["user_Id"].setValue(this.profile.userInfo.user_Id);
  this.profile.UpdateProfile(this.editProfile.value);
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

