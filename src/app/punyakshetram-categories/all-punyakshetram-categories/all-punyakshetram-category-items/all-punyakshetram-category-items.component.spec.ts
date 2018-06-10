import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPunyakshetramCategoryItemsComponent } from './all-punyakshetram-category-items.component';

describe('AllPunyakshetramCategoryItemsComponent', () => {
  let component: AllPunyakshetramCategoryItemsComponent;
  let fixture: ComponentFixture<AllPunyakshetramCategoryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPunyakshetramCategoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPunyakshetramCategoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
