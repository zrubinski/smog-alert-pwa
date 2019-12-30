import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { ISmogAlert } from './dtos/smog-alert';
import { SmogAlert } from './models/smog-alert';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SmogAlertService extends ApiService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  public getSmogAlertData = (): Observable<SmogAlert> => {
    const url = this.url('/SmogAlert');
    return this.httpClient
      .get<ISmogAlert>(url)
      .pipe(map(data => new SmogAlert(data)));
  }
}
