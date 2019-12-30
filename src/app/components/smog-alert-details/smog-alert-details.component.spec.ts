import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmogAlertDetailsComponent } from './smog-alert-details.component';

describe('SmogAlertDetailsComponent', () => {
  let component: SmogAlertDetailsComponent;
  let fixture: ComponentFixture<SmogAlertDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmogAlertDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmogAlertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
