import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  newitems: any = { name: '', price: '', rating: '' }; // Store new item details
  items: any[] = []; // Array to hold cart items
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    // Add new item to items array
    if(this.newitems.name && this.newitems.price && this.newitems.rating) {
      this.items.push({ ...this.newitems });
      // Reset the form fields
      this.newitems = { name: '', price: '', rating: '' };
    }
  }

}
