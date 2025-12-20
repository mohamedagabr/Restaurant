import {Category} from './category';

export class Order {

  orderId : number;
  orderName : string;
  orderPrice : number;
  image : string;
  orderDescription : string;
  creationDate: string;
  updateDate: string;
  category: Category;


  constructor(orderId: number, orderName: string, orderPrice: number, image: string, orderDescription: string, creationDate: string, updateDate: string, category: Category) {
    this.orderId = orderId;
    this.orderName = orderName;
    this.orderPrice = orderPrice;
    this.image = image;
    this.orderDescription = orderDescription;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
    this.category = category;
  }
}
