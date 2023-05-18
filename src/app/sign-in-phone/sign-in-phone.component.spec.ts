import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPhoneComponent } from './sign-in-phone.component';

describe('SignInPhoneComponent', () => {
  let component: SignInPhoneComponent;
  let fixture: ComponentFixture<SignInPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
