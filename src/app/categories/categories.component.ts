import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.params['id']);   //is used for typecasting the parameter to a number (as route parameters are always strings
    //Directly accesses the 'id' parameter from the URL.
  }

}

