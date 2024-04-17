import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctsTableComponent } from './proucts-table.component';

describe('ProuctsTableComponent', () => {
  let component: ProuctsTableComponent;
  let fixture: ComponentFixture<ProuctsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProuctsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProuctsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
