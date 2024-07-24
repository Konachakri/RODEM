import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles:any=[];
  public term:string="";
  public column:string="";
  public order:string="";
  public limit:number=0;
  public pages:number=0;
  public id:string="";
  constructor(private _vehicleserice:VehicleService) {

    _vehicleserice.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internam server error")
      }
    )
   }

  ngOnInit(): void {
  }

  filter(){
    this._vehicleserice.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  sort(){
    this._vehicleserice.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("intennal server error")
      }
    )
  }
  page(){
    this._vehicleserice.getPagedVehicles(this.limit,this.pages).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  delete(id:string){
    this._vehicleserice.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed");
      }
    )
  }


}
