import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {

  AllBooks: any = [];
  Search = '';
  constructor(private books: BookServiceService, private router: Router, private dataservice: DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.receivedData.subscribe((result: any) => {
      console.log(result)
      this.Search = result;

    });
    this.getAllBooks();
  }

  getAllBooks() {
    this.books.GetAllBooks().subscribe((response: any) => {
      console.log(response)
      this.AllBooks = response.result;
      console.log(this.AllBooks);
    })
  }
  quickview(book: any) {
    this.dataservice.sendData(book)
    this.router.navigateByUrl('/dashboard/quickview')
  }
  lowtohigh() {
    this.AllBooks = this.AllBooks.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
  }
  hightolow() {
    this.AllBooks = this.AllBooks.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
  }
  newestarrivals() {
    this.AllBooks.reverse();
  }
}
