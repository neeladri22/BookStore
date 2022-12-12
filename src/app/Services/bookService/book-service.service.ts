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
 
}
