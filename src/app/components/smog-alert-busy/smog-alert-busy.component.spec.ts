import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmogAlertBusyComponent } from './smog-alert-busy.component';

describe('SmogAlertBusyComponent', () => {
  let component: SmogAlertBusyComponent;
  let fixture: ComponentFixture<SmogAlertBusyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmogAlertBusyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmogAlertBusyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
