import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
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
