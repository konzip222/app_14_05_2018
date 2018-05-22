import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs';
import { ShopDataService } from '../../services/shop-data.service';
import { Product } from '../../shared/product.model';
import { element } from 'protractor';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit{

  public avaibleProd$ : Observable<Product[]>;
  public discountProducts$: Observable<Product[]>;
  public mostExpensiveProductName$: Observable<string>;
  public leastExpensiveProductName$: Observable<string>;  

  constructor(private _shopDataService: ShopDataService) { 
    let getMostExpensive =  (prev , curr) => curr.prize >= prev.prize ? curr : prev;
    let getLeastExpensive = (prev , curr) => curr.prize <= prev.prize ? curr : prev;
    this.avaibleProd$ = _shopDataService.avalibleProducts$.map( productList => productList);
    this.discountProducts$ = _shopDataService.avalibleProducts$.map( productList => productList.filter(element => element.discount == true));
    this.mostExpensiveProductName$ = _shopDataService.avalibleProducts$.map(productList => productList.reduce(getMostExpensive).name);
    this.leastExpensiveProductName$ = _shopDataService.avalibleProducts$.map(productList => productList.reduce(getLeastExpensive).name);    
  }

  ngOnInit() {
   setTimeout(() => {
       this._shopDataService.update();
    }, 0);
  }

  addItem(product : Product) {
    this._shopDataService.addProductToBasket(product);
  }

}
