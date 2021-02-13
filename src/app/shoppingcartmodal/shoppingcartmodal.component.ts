import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import Product from "../models/Product";

@Component({
  selector: 'app-shoppingcartmodal',
  templateUrl: './shoppingcartmodal.component.html',
  styleUrls: ['./shoppingcartmodal.component.css']
})
export class ShoppingcartmodalComponent implements OnInit {

  items: Product[] = [];

  constructor(
     private cartService: CartService
  ) {
    this.items = cartService.getItems();
  }

  ngOnInit(): void {
  }

}
