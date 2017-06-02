import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

import { Address } from '../addresses/address';
import { RouteExpensesConfigComponent } from './route-expenses-config.component';
import { RouteService } from '../route.service';
import { RouteInformation } from './route-information';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
  providers: [RouteService]
})
export class RouteComponent {

  private origin: Address;
  private destination: Address;

  @ViewChild("expenses")
  private expenses: RouteExpensesConfigComponent;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private routeService: RouteService
  ) {}

  public distanceMatrix(): void {
    let service = new google.maps.DistanceMatrixService();
    let request = {
      origins: [new google.maps.LatLng(this.origin.latitude, this.origin.longitude)],
      destinations: [new google.maps.LatLng(this.destination.latitude, this.destination.longitude)],
      travelMode: google.maps.TravelMode.DRIVING
    };
    service.getDistanceMatrix(request,
    (response: google.maps.DistanceMatrixResponse, status: google.maps.DistanceMatrixStatus) => {
      let routeInfo: RouteInformation = new RouteInformation();

      routeInfo.destination = response.destinationAddresses[0];
      routeInfo.origin = response.originAddresses[0];
      routeInfo.distance = response.rows[0].elements[0].distance.text;
      routeInfo.duration = response.rows[0].elements[0].duration.text;
      routeInfo.price = this.expenses.kmPrice * ((response.rows[0].elements[0].distance.value/1000)) + this.expenses.flatRate;

      this.routeService.sendRouteInformation(routeInfo);
    });
  }

  public setOrigin(origin: Address) {
    this.origin = origin;
  }

  public setDestination(destination: Address) {
    this.destination = destination;
  }
}