import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-icart',
  templateUrl: './icart.component.html',
  styleUrls: ['./icart.component.css']
})
export class IcartComponent implements OnInit {
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
