import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
public icount:number=0;
  constructor(private _itemsService:ItemsService) { 

    _itemsService.geticount().subscribe(
      (data:any)=>{
        this.icount=data;
      }
    )
  }

  ngOnInit(): void {
  }

}
