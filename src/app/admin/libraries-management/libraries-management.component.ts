import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-libraries-management',
  templateUrl: './libraries-management.component.html',
  styleUrls: ['./libraries-management.component.css']
})
export class LibrariesManagementComponent {
  @ViewChild('callCreateDailog') callCreateDialog !: TemplateRef<any>;
  @ViewChild('callDeleteDailog') callDeleteDialog !: TemplateRef<any>;
  @ViewChild('callUpdateDailog') callUpdateDialog !: TemplateRef<any>;

  
  constructor(public lib: LibraryService, public dialog: MatDialog) { }
  
  _filterText: string = '';
  

  ngOnInit(): void {
    this.lib.GetAllLibraries();
  }
  
  createLibrary: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    location_Latitude: new FormControl('', Validators.required),
    location_Longitude: new FormControl('', Validators.required),
    phone_Number: new FormControl('', Validators.required),
    image_Path1: new FormControl('', Validators.required),
    image_Path2: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    category_Id: new FormControl('', Validators.required)
  });

  OpenCreateDialog() {
    this.dialog.open(this.callCreateDialog);
  }
  
  CreateLibrary() {
    this.lib.CreateLibrary(this.createLibrary.value);
  }
  
  DeleteLibrary(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes') {
        this.lib.DeleteLibrary(id);
      }
      else {
        alert("Library Not Deleted");
      }
    });
  }

  updateLibrary: FormGroup = new FormGroup({
    library_Id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    location_Latitude: new FormControl('', Validators.required),
    location_Longitude: new FormControl('', Validators.required),
    phone_Number: new FormControl('', Validators.required),
    image_Path1: new FormControl('', Validators.required),
    image_Path2: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    category_Id: new FormControl('', Validators.required)
  });

  pData: any;
  OpenUpdateDialog(lib: any) {
    this.pData = lib;
    this.updateLibrary.controls['library_Id'].setValue(this.pData.library_Id);
    this.lib.display_image = this.pData.image_Path1;
    this.dialog.open(this.callUpdateDialog);
  }
  UpdateLibrary() {
    this.lib.UpdateLibrary(this.updateLibrary.value.library_Id,this.updateLibrary.value);
  }

  uploadImage(file: any) {
    if (file.length === 0)
      return;

    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.lib.uploadAttachment(formData);
  }
}
