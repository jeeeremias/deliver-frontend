import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RouteComponent }  from './route/route.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    RouteComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
