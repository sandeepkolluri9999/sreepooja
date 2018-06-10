import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverItemComponent } from './river-item.component';

describe('RiverItemComponent', () => {
  let component: RiverItemComponent;
  let fixture: ComponentFixture<RiverItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
