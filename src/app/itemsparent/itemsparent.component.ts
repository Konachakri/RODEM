import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-itemsparent',
  templateUrl: './itemsparent.component.html',
  styleUrls: ['./itemsparent.component.css']
})
export class ItemsparentComponent implements OnInit {

  constructor(private _itemsService:ItemsService) { }

  ngOnInit(): void {
  }

}
