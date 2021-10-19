import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HufflepuffComponent } from './hufflepuff.component';

describe('HufflepuffComponent', () => {
  let component: HufflepuffComponent;
  let fixture: ComponentFixture<HufflepuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HufflepuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HufflepuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
