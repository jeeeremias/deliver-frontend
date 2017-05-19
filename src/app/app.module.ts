import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent }  from './app.component';
import { RouteComponent }  from './route/route.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgwb2-5lARCTURTC0_eFf5fV9_1tY4MQs',
      libraries: ['places', 'geometry']
    }),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    RouteComponent
  ],
  bootstrap: [
    RouteComponent
  ]
})
export class AppModule { }
