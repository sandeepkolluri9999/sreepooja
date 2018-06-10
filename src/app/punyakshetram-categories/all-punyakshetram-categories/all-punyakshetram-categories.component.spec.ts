import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPunyakshetramCategoriesComponent } from './all-punyakshetram-categories.component';

describe('AllPunyakshetramCategoriesComponent', () => {
  let component: AllPunyakshetramCategoriesComponent;
  let fixture: ComponentFixture<AllPunyakshetramCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPunyakshetramCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPunyakshetramCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
