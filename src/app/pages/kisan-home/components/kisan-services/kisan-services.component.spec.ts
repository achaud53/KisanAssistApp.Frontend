import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisanServicesComponent } from './kisan-services.component';

describe('KisanServicesComponent', () => {
  let component: KisanServicesComponent;
  let fixture: ComponentFixture<KisanServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisanServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KisanServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
