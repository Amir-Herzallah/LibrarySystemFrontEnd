import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  

  constructor(public profile:ProfileService,  public dialog: MatDialog) {}
  ngOnInit(): void {
    this.profile.GetUserProfile();
    console.log(this.profile.userInfo);
  }

   OpenEditProfileDialog(image: any) {
    console.log(image)
    this.profile.display_image = image;
    this.dialog.open(ProfileEditComponent);
  }
  
}
