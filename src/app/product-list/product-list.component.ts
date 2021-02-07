import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.retrieveTutorials()
  }

  retrieveTutorials(): void {

  this.productService.getAll().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {
    this.products = data;
  });

  }

}
