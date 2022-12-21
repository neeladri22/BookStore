import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseUrl = environment.baseurl;
  constructor(private httpclient: HttpClient) { }

  postService(url: string, reqdata: any, token: boolean = true, httpOption: any) {
    return this.httpclient.post(this.baseUrl + url, reqdata, token && httpOption)
  }
  
  getService(url: string, token: boolean = false,httpOption: any) {
    return this.httpclient.get(this.baseUrl+url,token&& httpOption)
  }
  getCartBook(url: string, token: boolean = true,httpOption: any) {
    return this.httpclient.get(this.baseUrl+url,token&& httpOption)
  }
  deleteService(url: string, token: boolean = true, httpOptions: any) {
    return this.httpclient.delete(this.baseUrl+url,token && httpOptions)
  }
  putService(url: string, reqData: any, token: boolean = true, httpOptions: any) {
    return this.httpclient.put(this.baseUrl+url,reqData,token && httpOptions)
  }
}
