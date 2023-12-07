import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSAPComponent } from './gsap.component';

describe('GSAPComponent', () => {
  let component: GSAPComponent;
  let fixture: ComponentFixture<GSAPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GSAPComponent]
    });
    fixture = TestBed.createComponent(GSAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
