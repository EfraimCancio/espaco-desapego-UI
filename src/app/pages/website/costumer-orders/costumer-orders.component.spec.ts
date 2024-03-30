import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerOrdersComponent } from './costumer-orders.component';

describe('CostumerOrdersComponent', () => {
  let component: CostumerOrdersComponent;
  let fixture: ComponentFixture<CostumerOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumerOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostumerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
