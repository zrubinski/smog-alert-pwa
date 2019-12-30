import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smog-alert-busy',
  templateUrl: './smog-alert-busy.component.html',
  styleUrls: ['./smog-alert-busy.component.scss']
})
export class SmogAlertBusyComponent {
  @Input() isBusy;
}
