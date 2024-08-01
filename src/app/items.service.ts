import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  //create
  public icountSub$:BehaviorSubject<number>= new BehaviorSubject(0);

  constructor() { }

  geticount(){
    return this.icountSub$
  }

  //set
  setiCount(value:any){
    this.icountSub$.next(value);


  }
}
