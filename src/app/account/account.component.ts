import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(public profile:ProfileService,  public dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.profile.GetUserProfile();
  }

   OpenEditProfileDialog(image: any) {
    this.profile.display_image = image;
    this.dialog.open(ProfileEditComponent);
  }
}
