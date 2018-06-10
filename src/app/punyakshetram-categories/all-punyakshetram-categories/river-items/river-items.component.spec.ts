import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverItemsComponent } from './river-items.component';

describe('RiverItemsComponent', () => {
  let component: RiverItemsComponent;
  let fixture: ComponentFixture<RiverItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
