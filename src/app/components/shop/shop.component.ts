import { Component, OnInit } from '@angular/core';
import { ShopDataService } from '../../services/shop-data.service';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private _shopDataService: ShopDataService) { }

  goals : Product[];
  goalText = "Some text";
  itemCount = 0;
  apple : Product = {
    name: "apple",
    category: "food",
    prize: 2.05,
    amount: 0,
  };
  banana : Product = {
    name: "banana",
    category: "food",
    prize: 2.10,
    amount: 0,
  };
  chicken : Product = {
    name: "chicken",
    category: "food",
    prize: 10.99,
    amount: 0,
  };  
  monitor : Product = {
    name: "monitor",
    category: "AGD",
    prize: 310.99,
    amount: 0,
  };
  keyboard : Product = {
    name: "keyboard",
    category: "AGD",
    prize: 49.99,
    amount: 0,
  };  
  mouse : Product = {
    name: "mouse",
    category: "AGD",
    prize: 29.50,
    amount: 0,
  };   

  products = [this.apple,this.banana,this.chicken,this.monitor,this.mouse,this.keyboard];

  ngOnInit() {
    this._shopDataService.goal.subscribe(res => this.goals = res);
  }

  addItem(index) {
    this.goals.push(this.products[index]);
    this.goalText += this.itemCount;
    this._shopDataService.changeGoal(this.goals);
    this.itemCount = this.goals.length;    
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._shopDataService.changeGoal(this.goals);
  }

}
