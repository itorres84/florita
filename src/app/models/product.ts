export default class Product {

  id: string;
  name: string;
  Price: number;
  maxQuantity:number;
  urlImage:string;

  constructor() {
    this.id = "";
    this.name = "";
    this.Price = 0;
    this.maxQuantity = 0;
    this.urlImage = "";
  }

}
