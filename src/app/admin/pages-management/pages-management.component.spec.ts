import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesManagementComponent } from './pages-management.component';

describe('PagesManagementComponent', () => {
  let component: PagesManagementComponent;
  let fixture: ComponentFixture<PagesManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesManagementComponent]
    });
    fixture = TestBed.createComponent(PagesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
