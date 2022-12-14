import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/Services/bookService/book-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   CartList: any=[];
   showAddress = true;
   showCustomerDetails = true;
   displayContinueButton=true;
   showSummary=true;
   showSummeryDetails=true;
  constructor(private httpGetCart: BookServiceService) { }

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
  showOrderDetails(){
    this.showSummary = false
    this.displayContinueButton = false
    this.showSummeryDetails=false;
  }

}


