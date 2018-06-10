import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaktipeetamItemComponent } from './shaktipeetam-item.component';

describe('ShaktipeetamItemComponent', () => {
  let component: ShaktipeetamItemComponent;
  let fixture: ComponentFixture<ShaktipeetamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaktipeetamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaktipeetamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
