import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
public icount:number=0;
  constructor(private _itemsService:ItemsService) { }

  ngOnInit(): void {
  }

  itemscount(){
    this._itemsService.setiCount(this.icount++);
  }

}
