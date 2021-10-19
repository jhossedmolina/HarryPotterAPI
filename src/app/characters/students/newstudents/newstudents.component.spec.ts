import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstudentsComponent } from './newstudents.component';

describe('NewstudentsComponent', () => {
  let component: NewstudentsComponent;
  let fixture: ComponentFixture<NewstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
