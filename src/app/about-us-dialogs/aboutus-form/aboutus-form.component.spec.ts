import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusFormComponent } from './aboutus-form.component';

describe('AboutusFormComponent', () => {
  let component: AboutusFormComponent;
  let fixture: ComponentFixture<AboutusFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusFormComponent]
    });
    fixture = TestBed.createComponent(AboutusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
