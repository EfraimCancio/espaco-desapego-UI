import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginsTableComponent } from './origins-table.component';

describe('OriginsTableComponent', () => {
  let component: OriginsTableComponent;
  let fixture: ComponentFixture<OriginsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OriginsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
