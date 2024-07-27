import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  public product:any=[];

  constructor(private _reloadService:ReloadService) { }

  ngOnInit(): void {
  }
  fetchProduct(){
    this._reloadService.getActivity().subscribe(
      (data:any) => {
        const randomproduct = Math.floor(Math.random() * data.length);
        this.product = data[randomproduct];
      });
  }


}
