import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

import { Route } from './route';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
})
export class RouteComponent {

  public zoom: number;
  public distance: number;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  public distanceMatrix(route: Route): void {
    let service = new google.maps.DistanceMatrixService();
    let request = {
      origins: [new google.maps.LatLng(route.origin.latitude, route.origin.longitude)],
      destinations: [new google.maps.LatLng(route.destination.latitude, route.destination.longitude)],
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
}