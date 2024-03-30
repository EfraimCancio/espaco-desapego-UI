import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerCartComponent } from './costumer-cart.component';

describe('CostumerCartComponent', () => {
  let component: CostumerCartComponent;
  let fixture: ComponentFixture<CostumerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumerCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostumerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
