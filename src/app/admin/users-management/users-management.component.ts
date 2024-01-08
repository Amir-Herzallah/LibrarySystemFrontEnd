import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent {
  @ViewChild('callCreateDailog') callCreateDialog !: TemplateRef<any>;
  @ViewChild('callDeleteDailog') callDeleteDialog !: TemplateRef<any>;
  @ViewChild('callUpdateDailog') callUpdateDialog !: TemplateRef<any>;

  
  constructor(public user: UserService, public dialog: MatDialog) { }
  
  _filterText: string = '';
  

  ngOnInit(): void {
    this.user.GetAllUsers();
  }
  
  createUser: FormGroup = new FormGroup({
    first_Name: new FormControl('', Validators.required),
    last_Name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    location_Latitude: new FormControl('', Validators.required),
    location_Longitude: new FormControl('', Validators.required),
    phone_Number: new FormControl('', Validators.required),
    profile_Img_Path: new FormControl('', Validators.required),
    registration_Date: new FormControl('', Validators.required),
    is_Activated: new FormControl('', Validators.required)
  });

  OpenCreateDialog() {
    this.dialog.open(this.callCreateDialog);
  }                       
  
  CreateUser() {
    console.log(this.createUser.value);
    this.user.CreateUser(this.createUser.value);
  }
  
  DeleteUser(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes') {
        this.user.DeleteUser(id);
      }
      else {
        alert("User Not Deleted");
      }
    });
  }

  updateUser: FormGroup = new FormGroup({
    user_Id: new FormControl('', Validators.required),
    first_Name: new FormControl('', Validators.required),
    last_Name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    location_Latitude: new FormControl('', Validators.required),
    location_Longitude: new FormControl('', Validators.required),
    phone_Number: new FormControl('', Validators.required),
    profile_Img_Path: new FormControl('', Validators.required),
    registration_Date: new FormControl('', Validators.required),
    is_Activated: new FormControl('', Validators.required)
  });

  pData: any;
  OpenUpdateDialog(user: any) {
    this.pData = user;
    this.updateUser.controls['user_Id'].setValue(this.pData.user_Id);
    this.user.display_image = this.pData.profile_Img_Path;
    this.dialog.open(this.callUpdateDialog);
  }
  UpdateUser() {
    this.user.UpdateUser(this.updateUser.value.user_Id,this.updateUser.value);
  }

  uploadImage(file: any) {
    debugger;
    if (file.length === 0)
      return;

    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.user.uploadAttachment(formData);
  }
}
