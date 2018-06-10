import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsAPurohitComponent } from './register-as-a-purohit.component';

describe('RegisterAsAPurohitComponent', () => {
  let component: RegisterAsAPurohitComponent;
  let fixture: ComponentFixture<RegisterAsAPurohitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsAPurohitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsAPurohitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
