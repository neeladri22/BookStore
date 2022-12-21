import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token: any;
  constructor(private httpService: HttpserviceService) {
    this.token = localStorage.getItem('token')
  }

  GetAllBooks() {
    this.token = localStorage.getItem('token')
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/bookstore_user/get/book', true, headers)
  }
  getCart() {
    this.token = localStorage.getItem('token');
    
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
   
    return this.httpService.getCartBook('/bookstore_user/get_cart_items', true, header);
  }

  getWishlist(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token,
      })
    } 
    return this.httpService.getService('/bookstore_user/get_wishlist_items',true,header);
  }

  removeItem(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService("/bookstore_user/remove_cart_item/"+Book, true, header)
  }

  order(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService("/bookstore_user/add/order", Book, true, header)
  }

  quantity(bookId:any,req:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.putService("/bookstore_user/cart_item_quantity/"+bookId, req, true, header)
  }

  deleteWishlist(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService("/bookstore_user/remove_wishlist_item/"+Book, true, header)
  }
  addCart(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService("/bookstore_user/add_cart_item/"+Book.product_id, Book, true, header)
  }
  Wishlist(Book:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService("/bookstore_user/add_wish_list/"+Book.product_id, Book, true, header)
  }
 
}
