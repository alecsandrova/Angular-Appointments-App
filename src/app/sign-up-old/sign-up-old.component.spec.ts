import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpOldComponent } from './sign-up-old.component';

describe('SignUpOldComponent', () => {
  let component: SignUpOldComponent;
  let fixture: ComponentFixture<SignUpOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
