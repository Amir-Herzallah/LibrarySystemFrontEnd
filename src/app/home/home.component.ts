import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminService } from '../services/admin.service';
import { MainService } from '../services/main.service';
import { BookService } from '../services/book.service';
import { LibraryService } from '../services/library.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TestimonialService } from '../services/testimonial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('callPaymentDialog') callPaymentDialog !: TemplateRef<any>
  constructor(public manageHome: AdminService,
    public libraryService: LibraryService,

    public bookService: BookService,
    public bankService: MainService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    public testimonialService: TestimonialService) { }


  ngOnInit(): void {
    this.manageHome.GetAllHomepageData();
    this.bookService.GetTopBooks();
    this.bookService.GetAllCategoryBooks();
    this.bookService.GetFindBestSellingBook();
    this.libraryService.GetAllLibraries();
    this.testimonialService.GetAllTestimonials();
  }
  paymentForm: FormGroup = new FormGroup({
    card_Id: new FormControl(),
    card_No: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cardholder_Name: new FormControl('', Validators.required),
    cvv: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(3)])
  });
  bookPrice: any;
  bookInfo: any;
  bankInfo: any;
  cardNO: any;
  cardName: any;
  cvv: any;
  activeCategory: string = '';

  isActiveTab(category: any): boolean {
    return category.category_Name === this.activeCategory;
  }

  canPaid: any;

  openPaymentDialog(book: any) {
    this.bookPrice = book.price_Per_Day;
    this.dialog.open(this.callPaymentDialog);
    this.paymentForm.controls['card_Id'].setValue(1);
    this.bankService.GetBankByID(1).subscribe(res => {
      this.bankInfo = res;

    });
    this.bankInfo = this.bankService.bank;
    console.log(this.bankInfo)
  }

  payBook() {
    if (this.bookPrice <= this.bankInfo.balance) {
      this.bankInfo.balance = this.bankInfo.balance - this.bookPrice;
      this.bankService.UpdateBank(this.bankInfo);
      this.toastr.success("Paid")
    }
    else {
      console.log('No balance in account')
      this.toastr.error('Not Enough Balance');
    }
  }
  MatchError() {
    //   payBook() {

    //     if (this.bookPrice <= this.bankInfo.balance) {
    //       this.bankInfo.balance = this.bankInfo.balance - this.bookPrice;
    //       this.bankService.UpdateBank(this.bankInfo);
    //       this.canPaid = true;
    //     }
    //     else {
    //       console.log('No balance in account')
    //       this.canPaid = false;
    //     }

    //   }

    //   MatchError() {

    if (this.paymentForm.controls['cardholder_Name'].value ==
      this.bankInfo.cardholder_Name) {
      this.paymentForm.controls['cardholder_Name'].setErrors(null);
      if (this.paymentForm.controls['card_No'].value ==
        this.bankInfo.card_No) {
        this.paymentForm.controls['card_No'].setErrors(null);
        if (this.paymentForm.controls['cvv'].value ==
          this.bankInfo.cvv) {
          this.paymentForm.controls['cvv'].setErrors(null);
        }
        else {
          this.paymentForm.controls['cvv'].setErrors({ misMatch: true });
        }
      }
      else {
        this.paymentForm.controls['card_No'].setErrors({ misMatch: true });
      }
    }
    else
      this.paymentForm.controls['cardholder_Name'].setErrors({ misMatch: true });
  }
}