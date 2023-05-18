import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetProfilePresentationComponent } from './cabinet-profile-presentation.component';

describe('CabinetProfilePresentationComponent', () => {
  let component: CabinetProfilePresentationComponent;
  let fixture: ComponentFixture<CabinetProfilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetProfilePresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetProfilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
