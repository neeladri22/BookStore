import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishListArray: any = [];
  
  constructor(private bookService: BookServiceService) { }
  ngOnInit(): void {
    this.getWishlist();
  }
  getWishlist() {
    this.bookService.getWishlist().subscribe((response: any) => {
      console.log(response)
      this.wishListArray =  response.result;
      console.log(this.wishListArray);

    })
  }

  

}
