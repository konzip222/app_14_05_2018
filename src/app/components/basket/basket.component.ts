import { Component, OnInit } from '@angular/core';
import { ShopDataService } from '../../services/shop-data.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private _shopDataService: ShopDataService) { }

  basketContent = [];
  goalText = "Some text";
  itemCount = 0;

  ngOnInit() {
    this._shopDataService.goal.subscribe(res => this.basketContent = res);
  }

  addItem() {
    this.basketContent.push(this.goalText);
    this.goalText += this.itemCount;
    this._shopDataService.changeGoal(this.basketContent);
    this.itemCount = this.basketContent.length;    
  }

  removeItem(i) {
    this.basketContent.splice(i, 1);
    this._shopDataService.changeGoal(this.basketContent);
  }
}
