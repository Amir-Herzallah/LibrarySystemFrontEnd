import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-management',
  templateUrl: './categories-management.component.html',
  styleUrls: ['./categories-management.component.css']
})
export class CategoriesManagementComponent {
  @ViewChild('callCreateDailog') callCreateDialog !: TemplateRef<any>;
  @ViewChild('callDeleteDailog') callDeleteDialog !: TemplateRef<any>;
  @ViewChild('callUpdateDailog') callUpdateDialog !: TemplateRef<any>;

  
  constructor(public category: CategoriesService, public dialog: MatDialog) { }
  
  _filterText: string = '';
  
  ngOnInit(): void {
    this.category.GetAllCategories();
  }
  
  createCategory: FormGroup = new FormGroup({
    category_Name: new FormControl('', Validators.required),
    library_Id: new FormControl('', Validators.required)
  });

  OpenCreateDialog() {
    this.dialog.open(this.callCreateDialog);
  }
  
  CreateCategory() {
    this.category.CreateCategory(this.createCategory.value);
  }
  
  DeleteCategory(id: number) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes') {
        this.category.DeleteCategory(id);
      }
      else {
        alert("Category Not Deleted");
      }
    });
  }

  updateCategory: FormGroup = new FormGroup({
    category_Id: new FormControl('', Validators.required),
    category_Name: new FormControl('', Validators.required),
    library_Id: new FormControl('', Validators.required)
  });

  pData: any;
  OpenUpdateDialog(category: any) {
    this.pData = category;
    this.updateCategory.controls['category_Id'].setValue(this.pData.category_Id);
    this.dialog.open(this.callUpdateDialog);
  }

  UpdateCategory() {
    this.category.UpdateCategory(this.updateCategory.value.category_Id,this.updateCategory.value);
  }

  uploadImage(file: any) {
    if (file.length === 0)
      return;

    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.category.uploadAttachment(formData);
  }
}
