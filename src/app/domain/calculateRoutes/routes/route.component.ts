import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

import { Address } from '../addresses/address';
import { RouteExpensesConfigComponent } from './route-expenses-config.component';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
})
export class RouteComponent {

  private origin: Address;
  private destination: Address;

  @ViewChild("expenses")
  private expenses: RouteExpensesConfigComponent;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  public distanceMatrix(): void {
    let service = new google.maps.DistanceMatrixService();
    let request = {
      origins: [new google.maps.LatLng(this.origin.latitude, this.origin.longitude)],
      destinations: [new google.maps.LatLng(this.destination.latitude, this.destination.longitude)],
      travelMode: google.maps.TravelMode.DRIVING
    };
    service.getDistanceMatrix(request, this.matrixCallback);
  }

  private matrixCallback(
    response: google.maps.DistanceMatrixResponse,
    status: google.maps.DistanceMatrixStatus
  ): void {
    console.log(response);
  }

  public setOrigin(origin: Address) {
    this.origin = origin;
  }

  public setDestination(destination: Address) {
    this.destination = destination;
  }
}