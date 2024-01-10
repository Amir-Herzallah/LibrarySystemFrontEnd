import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesManagementComponent } from './libraries-management.component';

describe('LibrariesManagementComponent', () => {
  let component: LibrariesManagementComponent;
  let fixture: ComponentFixture<LibrariesManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrariesManagementComponent]
    });
    fixture = TestBed.createComponent(LibrariesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
