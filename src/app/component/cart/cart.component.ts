import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   CartList: any=[];
   
   isShow = false;
  address = true;
   placeorder = true;
  cont = true;
  summary = true;
  Books: any
  item_qty = 1;
  constructor(private httpGetCart: BookServiceService,private book: BookServiceService) { }

  ngOnInit(): void {
    this.getCartbook();
  }
  getCartbook() {
    this.httpGetCart.getCart().subscribe((response: any) => {
      console.log(response);
      this.CartList = response.result;
      console.log(this.CartList);

    });
  }
  deleteItem(Book: any) {

    console.log(Book)
    this.book.removeItem(Book).subscribe((res: any) => {
      console.log(res)
    })
  }


 
  addressBar() {
    this.address = false
    this.placeorder = false
  }
  continueBar() {
    this.summary = false
    this.cont = false
  }
 
  placeOrder() {
    
  }
  
  increase(Book: any) {
   
  }
  decrease(Book: any) {
    
  }
 

}


