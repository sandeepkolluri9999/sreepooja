import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunyakshetramCategoriesComponent } from './punyakshetram-categories.component';

describe('PunyakshetramCategoriesComponent', () => {
  let component: PunyakshetramCategoriesComponent;
  let fixture: ComponentFixture<PunyakshetramCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunyakshetramCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunyakshetramCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
