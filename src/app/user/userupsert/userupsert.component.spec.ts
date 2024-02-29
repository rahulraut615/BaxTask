import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserupsertComponent } from './userupsert.component';

describe('UserupsertComponent', () => {
  let component: UserupsertComponent;
  let fixture: ComponentFixture<UserupsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserupsertComponent]
    });
    fixture = TestBed.createComponent(UserupsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
