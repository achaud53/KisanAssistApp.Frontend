import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-kisan-market',
  templateUrl: './kisan-market.component.html',
  styleUrls: ['./kisan-market.component.css']
})
export class KisanMarketComponent implements OnInit {

  @Input() categoryType : string | undefined;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  // isElectricS : boolean = false;
  // isMedicalS : boolean = false;
  // isIrrigationS : boolean = false;
  // isConstructionAS: boolean = false;

  products: Product[] = [
    {
      id: 1,
      title: 'Model Cotton Seed Kaveri ATM BG-2',
      price: 10,
      category: 'Category 1',
      description: 'Description for Product 1',
      image: 'product1.jpg'
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20,
      category: 'Category 2',
      description: 'Description for Product 2',
      image: 'product2.jpg'
    },
    // Add more products as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }




  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }


}
