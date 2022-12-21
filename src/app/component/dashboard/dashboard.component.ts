import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  badgeCount:any;
  constructor(private router:Router,private dataService:DataServiceService) {
    this.badgeCount=0;
   }
  
 
  ngOnInit(): void {
    this.badgeCount++;
  }
  searchBook(event:any){
    this.dataService.sendData(event.target.value)
  }
  Logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
    console.log("Logout Successfully..!!!");
  }
  wish(){
    this.router.navigateByUrl("/dashboard/wishlist");
  }
  cart(){
    this.router.navigateByUrl("/dashboard/cart");
   
  }

}
