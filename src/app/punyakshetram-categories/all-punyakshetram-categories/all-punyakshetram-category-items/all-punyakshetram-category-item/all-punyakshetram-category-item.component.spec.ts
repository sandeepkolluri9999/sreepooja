import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPunyakshetramCategoryItemComponent } from './all-punyakshetram-category-item.component';

describe('AllPunyakshetramCategoryItemComponent', () => {
  let component: AllPunyakshetramCategoryItemComponent;
  let fixture: ComponentFixture<AllPunyakshetramCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPunyakshetramCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPunyakshetramCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
