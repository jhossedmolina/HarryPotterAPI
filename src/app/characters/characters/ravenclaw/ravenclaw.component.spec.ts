import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenclawComponent } from './ravenclaw.component';

describe('RavenclawComponent', () => {
  let component: RavenclawComponent;
  let fixture: ComponentFixture<RavenclawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RavenclawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RavenclawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
