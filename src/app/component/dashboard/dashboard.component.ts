import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  searchBook(event:any){
    this.dataService.sendData(event.target.value)
  }

}
