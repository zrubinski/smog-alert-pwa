import { Component, OnInit } from '@angular/core';
import { SmogAlert } from './services/models/smog-alert';
import { SmogAlertService } from './services/smog-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Smog Alert';
  isBusy: boolean;
  smogAlertData: SmogAlert;

  constructor(private smogAlertService: SmogAlertService) {
  }

  ngOnInit(): void {
    this.isBusy = true;
    this.smogAlertService
      .getSmogAlertData()
      .subscribe(data => {
        this.smogAlertData = data;
        this.isBusy = false;
      });
  }
}
