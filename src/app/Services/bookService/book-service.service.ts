import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token: any;
  constructor(private httpService: HttpserviceService) {
   
  }

  GetAllBooks() {
   
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        
      })
    }
    return this.httpService.getService('/bookstore_user/get/book', headers)
  }
 
}
