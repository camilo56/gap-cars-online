import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarselectComponent } from './carselect.component';

describe('CarselectComponent', () => {
  let component: CarselectComponent;
  let fixture: ComponentFixture<CarselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
