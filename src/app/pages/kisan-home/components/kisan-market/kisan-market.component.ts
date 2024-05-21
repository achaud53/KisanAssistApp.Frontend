import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-kisan-market',
  templateUrl: './kisan-market.component.html',
  styleUrls: ['./kisan-market.component.css']
})


export class KisanMarketComponent implements OnInit {

  @Input() categoryType : string | undefined;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  products: Array<Product> | undefined;
  productSubscription: Subscription | undefined;
  sort: string = 'desc';
  count: string = '12';
  // isElectricS : boolean = false;
  // isMedicalS : boolean = false;
  // isIrrigationS : boolean = false;
  // isConstructionAS: boolean = false;

  products2: Product[] = [
    {
      id: 1,
      name: 'Model Cotton Seed Kaveri ATM BG-2',
      brand:"XYZ",
      availability:"In Stock",
      price: 10,
      category: 'Category 1',
      description: 'Description for Product 1',
      imageUrl: 'product1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      brand:"XYZ",
      availability:"In Stock",
      price: 20,
      category: 'Category 2',
      description: 'Description for Product 2',
      imageUrl: 'product2.jpg'
    },
    // Add more products as needed
  ];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    // this.getProducts();
    console.log("Checking on Kisan Market111" +this.categoryType)

    console.log("Checking on Kisan Service" +this.categoryType)
    if (this.categoryType === "Agriculture Equipment" ){
            this.getProductsBytype('Agri-Equip')
            
        }else if (this.categoryType === "Seeds" ){
          this.getProductsBytype('Seeds')
      }else if (this.categoryType === "Milk Business" ){
        this.getProductsBytype('MilkService')
    }else if (this.categoryType === "Pesticides" ){
      this.getProductsBytype('Pesticides')
}
    
  }

  getProducts(): void{
    this.productSubscription = this.storeService.getAllProducts(this.count, this.sort)
    .subscribe((_products)=> {
      this.products = _products;
    })
  }

  getProductsBytype(productType: string): void{
    this.productSubscription = this.storeService.getProductsBytype(productType)
    .subscribe((_products)=> {
      this.products = _products;
    })
  }

  refreshKisanMarket(){
    this.ngOnInit();
  }

  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }


}
