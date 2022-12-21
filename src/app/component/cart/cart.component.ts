import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() messageevent=new EventEmitter<any>();
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
      //this.messageevent.emit(res)
      window.location.reload();
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
    let orders: Array<any> = []
    for (this.Books of this.CartList) {
      let Book = {
        product_id: this.Books.product_id._id,
        product_name: this.Books.product_id.bookName,
        product_quantity: this.Books.product_id.quantity,
        product_price: this.Books.product_id.price,
      }
      orders.push(Book)
    }
    let payload = {
      orders: orders
    }
    console.log(payload)
    this.book.order(payload).subscribe((res: any) => {
      console.log(res)
    })
  }
  
  increase(Book: any) {
    this.item_qty = Book.quantityToBuy;
    this.item_qty += 1;
    console.log("increased",this.item_qty);
    this.updateCount(Book);
  
  }
  decrease(Book: any) {
    this.item_qty =Book.quantityToBuy;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log( "decrease", this.item_qty);
      this.updateCount(Book);
      
    }
 
  }

  
  updateCount(Book:any){
    let payload={
      quantityToBuy: this.item_qty
    }
    this.book.quantity(Book._id,payload).subscribe((res:any)=>{
      console.log(res)
      window.location.reload();
    })
  }
 

}


