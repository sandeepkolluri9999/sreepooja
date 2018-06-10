import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoptionComponent } from './contactoption.component';

describe('ContactoptionComponent', () => {
  let component: ContactoptionComponent;
  let fixture: ComponentFixture<ContactoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
