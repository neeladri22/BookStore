import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
 // AllBooks=[]
  AllBooks: any = [];
  constructor(private books:BookServiceService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.books.GetAllBooks().subscribe((response: any)=>{
      console.log(response)
      this.AllBooks = response.result;
      console.log(this.AllBooks);
    })
  }

}
