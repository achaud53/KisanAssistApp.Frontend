import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisanHomeComponent } from './kisan-home.component';

describe('KisanHomeComponent', () => {
  let component: KisanHomeComponent;
  let fixture: ComponentFixture<KisanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisanHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KisanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
