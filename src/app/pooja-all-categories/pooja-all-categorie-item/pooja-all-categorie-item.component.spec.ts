import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaAllCategorieItemComponent } from './pooja-all-categorie-item.component';

describe('PoojaAllCategorieItemComponent', () => {
  let component: PoojaAllCategorieItemComponent;
  let fixture: ComponentFixture<PoojaAllCategorieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaAllCategorieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaAllCategorieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
