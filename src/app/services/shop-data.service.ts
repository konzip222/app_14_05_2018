import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
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

  apple : Product = {
    name: "apple",
    category: "food",
    prize: 2.05,
    amount: 0,
    discount: true,    
  };
  banana : Product = {
    name: "banana",
    category: "food",
    prize: 2.10,
    amount: 0,
    discount: true,
  };
  chicken : Product = {
    name: "chicken",
    category: "food",
    prize: 10.99,
    amount: 0,
    discount: false,    
  };  
  monitor : Product = {
    name: "monitor",
    category: "AGD",
    prize: 310.99,
    amount: 0,
    discount: false,    
  };
  keyboard : Product = {
    name: "keyboard",
    category: "AGD",
    prize: 49.99,
    amount: 0,
    discount: true,    
  };  
  mouse : Product = {
    name: "mouse",
    category: "AGD",
    prize: 29.50,
    amount: 0,
    discount: true,
  };  
  
  private avalibleProducts = new Subject<Product[]>();
  avalibleProducts$ = this.avalibleProducts.asObservable();

  private basketProducts = new Subject<Product[]>();
  basketProducts$ = this.basketProducts.asObservable();
  private tmpBasketProducts = [];

  avalibleProductsArray = [this.apple,this.banana,this.chicken,this.monitor,this.mouse,this.keyboard];

  constructor() {
   }

  update(){
    this.avalibleProducts.next(this.avalibleProductsArray);
   // this.basketProducts.next();    
  }

  updateBasket(){
    this.basketProducts.next(this.tmpBasketProducts);
  }  

  addProductToBasket(product : Product){
    this.tmpBasketProducts.push(product);
    this.basketProducts.next(this.tmpBasketProducts);
  }

  removeProductFromBasket(index){
    this.tmpBasketProducts.splice(index, 1);
    this.basketProducts.next(this.tmpBasketProducts);    
  }

}
