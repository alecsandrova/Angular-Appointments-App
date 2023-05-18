import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOldComponent } from './sign-in-old.component';

describe('SignInOldComponent', () => {
  let component: SignInOldComponent;
  let fixture: ComponentFixture<SignInOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
