import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {
  public item:string ="";

 public newitem = {
  productname:"",
  price:0,
  rating:0,
  freedelivery:false
};
 


public products:any []=[
  {productname:'pen',price:10,rating:3,freedelivery:false},
  {productname:'tv',price:15000,rating:4.6,freedelivery:true},
  {productname:'t-shirt',price:400,rating:4,freedelivery:false},
  {productname:'cap',price:200,rating:5,freedelivery:false},
  {productname:'tempered glass',price:300,rating:2,freedelivery:false},
  {productname:'remote',price:4000,rating:2.5,freedelivery:true},
  {productname:'laptop',price:40000,rating:4.5,freedelivery:true},
  {productname:'bat',price:5000,rating:4.5,freedelivery:true}  ,
  {productname:'washing machine',price:20000,rating:3.8,freedelivery:true},
  {productname:'bag',price:490,rating:4.1,freedelivery:false}

  
]


  constructor() { }

  ngOnInit(): void {
  }
  delete(i:number){
    this.products.splice(i,1);
  }

search(item:string){
  this.products = this.products.filter( product=> product.productname.includes(item));
}
free(){
  this.products = this.products.filter(product =>product.freedelivery);
}
lowhigh(){
  this.products = this.products.sort((a,b)=>a.price - b.price)
}
highlow(){
  this.products = this.products.sort((a,b)=>b.price - a.price)
}
ratelh(){
  this.products = this.products.sort((a,b)=>a.rating - b.rating)
}
ratehl(){
  this.products = this.products.sort((a,b)=>b.rating - a.rating)
}
Offer(){
  this.products=this.products.map(product=>{product.price=product.price/2;
    return product;
  });
}
delivery(){
  this.products = this.products.map(product=>{
    if(product.freedelivery == false){
      product.price = product.price+50;
    }
    return product;
  });
}
totalPrice(){
  let total= this.products.reduce((sum,a)=>sum+a.price,0);
  alert(total);
}
totalCart(){
  let cart= this.products.length;
  alert(cart);
}
addtoCart() {
 this.products.push({...this.newitem});
this.newitem={productname:'',price:0,rating:0,freedelivery:false};
}

}


