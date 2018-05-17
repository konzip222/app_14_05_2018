import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../shared/product.model';
/*
interface product{
  name: string,
  prize: number,
  year: number,
}
*/
@Injectable()
export class ShopDataService {

  someText = "osmeoaem";
  newProduct : Product = {
    name: "dasdas",
    category: "sadsad",
    prize: 4,
    amount: 3,
  };

 // private goals = new BehaviorSubject<Product>([this.newProduct, this.newProduct, this.newProduct]);
  private goals = new BehaviorSubject<any>([]);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }

}
