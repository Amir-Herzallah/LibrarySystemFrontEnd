import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusCreateFormComponent } from './aboutus-create-form.component';

describe('AboutusCreateFormComponent', () => {
  let component: AboutusCreateFormComponent;
  let fixture: ComponentFixture<AboutusCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusCreateFormComponent]
    });
    fixture = TestBed.createComponent(AboutusCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
