import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmogAlertIndexComponent } from './smog-alert-index.component';

describe('SmogAlertIndexComponent', () => {
  let component: SmogAlertIndexComponent;
  let fixture: ComponentFixture<SmogAlertIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmogAlertIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmogAlertIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
