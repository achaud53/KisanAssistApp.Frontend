import { Component, Input, OnInit } from '@angular/core';

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
  

  constructor() { }

  ngOnInit(): void {

    console.log("Checking on Kisan Service" +this.categoryType)
    if (this.categoryType === "Irrigation Services" ){
            this.isIrrigationS = true;
        }else if (this.categoryType === "Medical Services" ){
          this.isMedicalS = true;
      }else if (this.categoryType === "Electric Services" ){
        this.isElectricS = true;
    }else if (this.categoryType === "Construction Assistance" ){
      this.isConstructionAS = true;
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

}
