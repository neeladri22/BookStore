import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  Book: any;
  rating: any;
  BookId: any;
 
  constructor(private bookService: BookServiceService, private dataService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.receivedData.subscribe((response:any)=>{
      this.Book = response;
    })

  }
  addToBag(){
   
  }
  wishlist(){}
}

