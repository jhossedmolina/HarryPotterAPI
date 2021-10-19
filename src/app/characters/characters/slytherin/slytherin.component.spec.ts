import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlytherinComponent } from './slytherin.component';

describe('SlytherinComponent', () => {
  let component: SlytherinComponent;
  let fixture: ComponentFixture<SlytherinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlytherinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlytherinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
