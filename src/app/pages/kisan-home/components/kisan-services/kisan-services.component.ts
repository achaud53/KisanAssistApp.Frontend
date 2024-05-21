import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-kisan-services',
  templateUrl: './kisan-services.component.html',
  styleUrls: ['./kisan-services.component.css']
})
export class KisanServicesComponent implements OnInit {

  @Input() categoryType : string | undefined;
  isElectricS : boolean = false;
  isMedicalS : boolean = false;
  isIrrigationS : boolean = false;
  isConstructionAS: boolean = false;
  products: Array<Product> | undefined;
  sort: string = 'desc';
  count: string = '12';
  productSubscription: Subscription | undefined;
  

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {

    // this.getServices();

    console.log("Checking on Kisan Service" +this.categoryType)
    if (this.categoryType === "Irrigation Services" ){
            this.isIrrigationS = true;
            //we can call service here
            this.getServicesBytype('Irrigation')
            
        }else if (this.categoryType === "Medical Services" ){
          this.isMedicalS = true;
          this.getServicesBytype('Medical')
      }else if (this.categoryType === "Electric Services" ){
        this.isElectricS = true;
        this.getServicesBytype('Electric')
    }else if (this.categoryType === "Construction Assistance" ){
      this.isConstructionAS = true;
      this.getServicesBytype('Construction')
}





console.log("Checking Value" +this.isElectricS)

  }

  refreshKisanService(){
    this.isElectricS = false;
    this.isIrrigationS = false;
    this.isMedicalS  = false;
    this.isConstructionAS = false
    this.ngOnInit();

  }

 

  getServices(): void{
    this.productSubscription = this.storeService.getAllServices(this.count, this.sort)
    .subscribe((_products)=> {
      this.products = _products;
    })
  }

  getServicesBytype(servicetype: string): void{
    this.productSubscription = this.storeService.getServicesById(servicetype)
    .subscribe((_products)=> {
      this.products = _products;
    })
  }

}
