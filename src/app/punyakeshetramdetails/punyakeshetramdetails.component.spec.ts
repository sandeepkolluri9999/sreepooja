import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakeshetramdetailsComponent } from './punyakeshetramdetails.component';

describe('PunyakeshetramdetailsComponent', () => {
  let component: PunyakeshetramdetailsComponent;
  let fixture: ComponentFixture<PunyakeshetramdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakeshetramdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakeshetramdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
