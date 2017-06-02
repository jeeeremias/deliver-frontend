import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent }  from './app.component';
import { RouteComponent }  from './domain/calculateRoutes/routes/route.component';
import { RouteExpensesConfigComponent } from './domain/calculateRoutes/routes/route-expenses-config.component';
import { AddressAutocompleteComponent } from './domain/calculateRoutes/addresses/address-autocomplete.component';

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
    RouteComponent,
    RouteExpensesConfigComponent,
    AddressAutocompleteComponent
  ],
  bootstrap: [
    RouteComponent
  ]
})
export class AppModule { }
