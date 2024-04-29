import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  categories = ['Irrigation Services', 'Electric Services', 'Medical Services', 'Construction Assistance'];
  marketDetails = ['Agriculture Equipment', 'Pesticides', 'Seeds', 'Milk Business'];

  @Output() showCategory = new EventEmitter<string>();
  @Output() marketCategory = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category: string): void {
    console.log("Checking category" + category)
    this.showCategory.emit(category);
  }

  // onShowMarket(marketDetails: string): void {
  //   console.log("Checking category" + marketDetails)
  //   this.marketCategory.emit(marketDetails);
  // }

}
