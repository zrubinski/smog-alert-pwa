import { Component, OnInit, Input } from '@angular/core';
import { SmogAlert } from 'src/app/services/models/smog-alert';

@Component({
  selector: 'app-smog-alert-index',
  templateUrl: './smog-alert-index.component.html',
  styleUrls: ['./smog-alert-index.component.scss']
})
export class SmogAlertIndexComponent implements OnInit {

  @Input() smogAlertData: SmogAlert;

  constructor() { }

  ngOnInit() {
  }

}
