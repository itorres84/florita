import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Product from "./models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbPath = 'appEngine/products';

  productslist: AngularFireList<Product[]>;

  constructor(private db: AngularFireDatabase) {
      this.productslist = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Product[]> {
    return this.productslist;
  }


}
