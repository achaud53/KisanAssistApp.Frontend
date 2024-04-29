import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { CartService } from '../../services/cart.service';
import { KisanServicesComponent } from './components/kisan-services/kisan-services.component';

const ROWS_HEIGHT: { [id:number]: number } = { 1: 400, 3: 335, 4: 350};
@Component({
  selector: 'app-kisan-home',
  templateUrl: './kisan-home.component.html',
  styleUrls: ['./kisan-home.component.css']
})
export class KisanHomeComponent implements OnInit, OnDestroy {

  @ViewChild(KisanServicesComponent) KisanServicesComp: KisanServicesComponent | undefined;
  
  category: string = '' ;
  cols: number = 4;
  rowHeight = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined;
  sort: string = 'desc';
  count: string = '12';
  productSubscription: Subscription | undefined;
  isMarketShow: boolean= false;

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productSubscription = this.storeService.getAllProducts(this.count, this.sort)
    .subscribe((_products)=> {
      this.products = _products;
    })
  }

  onColumnsCountChange(colsNumber: number): void{
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
    console.log(`Entrou no onColumns - Cols = ${this.cols}`);
    console.log(`Entrou no onColumns - RowHeight = ${this.rowHeight}`);
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory;
    console.log("newCategory" +this.category)
    
    // if(this.category === "Irrigation Services"||  "Medical Services" || "Electric Services" || "Construction Assistance"){
    //   this.isMarketShow = false;
    // }
    
    if (this.category === "Irrigation Services" || 
    this.category === "Medical Services" || 
    this.category === "Construction Assistance" || 
    this.category === "Electric Services") {
    this.isMarketShow = false;
    this.KisanServicesComp?.refreshKisanService();
    }else{
      this.isMarketShow = true;
    }

    console.log("this.isMarketShow" + this.isMarketShow)
    
  }



  onAddToCart(product: Product): void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

  ngOnDestroy(): void {
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }

}
