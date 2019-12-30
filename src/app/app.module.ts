import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SmogAlertDetailsComponent } from './components/smog-alert-details/smog-alert-details.component';
import { SmogAlertIndexComponent } from './components/smog-alert-index/smog-alert-index.component';
import { SmogAlertBusyComponent } from './components/smog-alert-busy/smog-alert-busy.component';

@NgModule({
  declarations: [
    AppComponent,
    SmogAlertDetailsComponent,
    SmogAlertIndexComponent,
    SmogAlertBusyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
