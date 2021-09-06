import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoginFormComponent } from './my-login-form.component';

describe('MyLoginFormComponent', () => {
  let component: MyLoginFormComponent;
  let fixture: ComponentFixture<MyLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
