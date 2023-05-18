import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesCodeComponent } from './acces-code.component';

describe('AccesCodeComponent', () => {
  let component: AccesCodeComponent;
  let fixture: ComponentFixture<AccesCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
