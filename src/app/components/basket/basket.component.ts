import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopDataService } from '../../services/shop-data.service';
import { Product } from '../../shared/product.model';
import { element } from 'protractor';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public basketContent$ : Observable<Product[]>;
  public prizes$ : Observable<number[]>;
  public fullPrize$: Observable<number>; 
  public lastProductName$ : Observable<string>;   

  constructor(private _shopDataService: ShopDataService) {
      this.basketContent$ = _shopDataService.basketProducts$.map( productList => productList);   
      this.prizes$ = _shopDataService.basketProducts$.map(productList => productList.map(element => element.prize * element.amount));       
      this.fullPrize$ = _shopDataService.basketProducts$.map(productList => productList.map(element => element.prize * element.amount).reduce((prev,curr) => prev+curr,0));    
      this.lastProductName$ = _shopDataService.basketProducts$.map( productList => productList.reduce( (acc, curr) => curr ).name );      
   }

  ngOnInit() {
  }

  removeItem(index) {
    this._shopDataService.removeProductFromBasket(index);
  }

  getData(){
    this._shopDataService.updateBasket();
  }
}
