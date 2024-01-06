import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedbooksComponent } from './borrowedbooks.component';

describe('BorrowedbooksComponent', () => {
  let component: BorrowedbooksComponent;
  let fixture: ComponentFixture<BorrowedbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowedbooksComponent]
    });
    fixture = TestBed.createComponent(BorrowedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
