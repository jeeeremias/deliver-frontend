import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent }  from './app.component';
import { RouteComponent }  from './domain/calculateRoutes/routes/route.component';
import { RouteExpensesConfigComponent } from './domain/calculateRoutes/routes/route-expenses-config.component';
import { AddressAutocompleteComponent } from './domain/calculateRoutes/addresses/address-autocomplete.component';
import { RouteInformationComponent } from './domain/calculateRoutes/routes/route-information.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgwb2-5lARCTURTC0_eFf5fV9_1tY4MQs',
      libraries: ['places', 'geometry']
    })
  ],
  declarations: [
    AppComponent,
    RouteComponent,
    RouteExpensesConfigComponent,
    AddressAutocompleteComponent,
    RouteInformationComponent
  ],
  bootstrap: [
    RouteComponent
  ]
})
export class AppModule { }
