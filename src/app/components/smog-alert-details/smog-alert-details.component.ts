import { Component, OnInit, Input } from '@angular/core';
import { SmogAlert } from 'src/app/services/models/smog-alert';

@Component({
  selector: 'app-smog-alert-details',
  templateUrl: './smog-alert-details.component.html',
  styleUrls: ['./smog-alert-details.component.scss']
})
export class SmogAlertDetailsComponent implements OnInit {

  @Input() smogAlertData: SmogAlert;

  constructor() { }

  ngOnInit() {
  }

}
