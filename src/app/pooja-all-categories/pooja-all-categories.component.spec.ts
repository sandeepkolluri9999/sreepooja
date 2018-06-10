import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaAllCategoriesComponent } from './pooja-all-categories.component';

describe('PoojaAllCategoriesComponent', () => {
  let component: PoojaAllCategoriesComponent;
  let fixture: ComponentFixture<PoojaAllCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaAllCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
