import { Component,OnInit, TemplateRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BorrowedbooksService } from '../services/borrowedbooks.service';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from '../services/main.service';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from '../services/email.service';
import { waitForAsync } from '@angular/core/testing';
@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent {
  @ViewChild('callPaymentDialog') callPaymentDialog !: TemplateRef<any>

  bookId?: number;
  bookDetails:any;
  borrowBookInfo:any;
  currentDate!: Date;
  localData: any;
  invoiceInfo: any
  bookPrice: any;
  bankInfo: any;
  cardNO: any;
  cardName: any;
  cvv: any;
  canPaid: any;

  constructor(private router: Router,  private route: ActivatedRoute,public bookService:BookService,public borrowbookservice:BorrowedbooksService,
    public dialog: MatDialog, public bankService:MainService, public emailService: EmailService,  private toastr: ToastrService) { 
    this.localData = localStorage.getItem("user");
    this.localData = JSON.parse(this.localData);
  }
   
  borrowBookForm:FormGroup= new FormGroup({
    user_Id:new FormControl(),
    book_Id:new FormControl(),
    borrow_Date_To: new FormControl('',Validators.required),
    borrow_Date_From:new FormControl(),
    fine_Percentage: new FormControl(),
    isfine_Paid:new FormControl()
  });

  paymentForm: FormGroup = new FormGroup({
    card_Id: new FormControl(),
    card_No: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cardholder_Name: new FormControl('', Validators.required),
    cvv: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(3)])
  });

 ngOnInit():void{
   this.route.params.subscribe(params=>{
    this.bookId= +params['id']
    if (this.bookId) {
      this.currentDate = new Date();
      this.bookService.GetBookById(this.bookId);
      this.borrowBookForm.controls['user_Id'].setValue(parseInt(this.localData.userID));
      this.borrowBookForm.controls['book_Id'].setValue(this.bookId);
      this.borrowBookForm.controls['borrow_Date_From'].setValue(this.currentDate.toISOString().split('T')[0]);
      this.borrowBookForm.controls['fine_Percentage'].setValue(0.4);
      this.borrowBookForm.controls['isfine_Paid'].setValue("false");
    } else {
      console.error('Book ID is not defined');
    }
   });
 }

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
closePaymentDialog(): void {
  this.dialog.closeAll();
}

MatchError() {   
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
payBook() {

  if (this.bookPrice <= this.bankInfo.balance) {
    this.bankInfo.balance = this.bankInfo.balance - this.bookPrice;
    this.bankService.UpdateBank(this.bankInfo);
    this.createBorrowBook();
    this.dialog.closeAll();

    this.toastr.success('Borrow Book Successfully!')
  }
  else {
    console.log('No balance in account')
    this.dialog.closeAll();
    this.toastr.error('No balance in account')

  }

}
 createBorrowBook(){
  this.borrowbookservice.CreateBorrowedBook(this.borrowBookForm.value);
 }
}


