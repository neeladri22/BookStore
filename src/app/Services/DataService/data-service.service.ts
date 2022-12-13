import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject('');   // unrelated Components data sharing
  receivedData = this.messageSource.asObservable();

  constructor() { }

  sendData(message: any) {  
    this.messageSource.next(message)
  }
}
