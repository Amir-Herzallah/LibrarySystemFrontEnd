import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsDialogComponent } from './contact-us-dialog.component';

describe('ContactUsDialogComponent', () => {
  let component: ContactUsDialogComponent;
  let fixture: ComponentFixture<ContactUsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsDialogComponent]
    });
    fixture = TestBed.createComponent(ContactUsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
