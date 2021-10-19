import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GryffindorComponent } from './gryffindor.component';

describe('GryffindorComponent', () => {
  let component: GryffindorComponent;
  let fixture: ComponentFixture<GryffindorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GryffindorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GryffindorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
