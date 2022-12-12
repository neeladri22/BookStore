import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {

  AllBooks: any = [];
  constructor(private books:BookServiceService, private router: Router) { }

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
  quickview(Book:any){  
   
    this.router.navigateByUrl('/dashboard/quickview/' + Book._id)
  }
}
