import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseselectionComponent } from './houseselection.component';

describe('HouseselectionComponent', () => {
  let component: HouseselectionComponent;
  let fixture: ComponentFixture<HouseselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
