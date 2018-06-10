import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaktipeetamsItemsComponent } from './shaktipeetams-items.component';

describe('ShaktipeetamsItemsComponent', () => {
  let component: ShaktipeetamsItemsComponent;
  let fixture: ComponentFixture<ShaktipeetamsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaktipeetamsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaktipeetamsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
