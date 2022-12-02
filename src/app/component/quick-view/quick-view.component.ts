import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  Book: any;
  rating:any;
  BookId:any;
  //getAllBooks
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem("BookId");
    console.log(this.BookId);
    this.getAllBooks();
    
  }
  getAllBooks() {
    this.bookService.GetAllBooks().subscribe((response: any) => {
      response.result.forEach((element: any) => {
        if (element._id == this.BookId) {
          this.Book = element;
        }
      });
    })
  }

}
