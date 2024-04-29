import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisanMarketComponent } from './kisan-market.component';

describe('KisanMarketComponent', () => {
  let component: KisanMarketComponent;
  let fixture: ComponentFixture<KisanMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisanMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KisanMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
