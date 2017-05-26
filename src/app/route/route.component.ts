import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
})
export class RouteComponent implements OnInit {

  public latitudeOrigin: number;
  public longitudeOrigin: number;
  public latitudeDest: number;
  public longitudeDest: number;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public distance: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //set google maps defaults
    this.zoom = 4;
    this.latitudeOrigin = 0;
    this.longitudeOrigin = 0;
    this.latitudeDest = 0;
    this.longitudeDest = 0;
    this.latitude = 0;
    this.longitude = 0;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  public distanceMatrix(): void {
    let service = new google.maps.DistanceMatrixService();
    let request = {
      origins: [new google.maps.LatLng(this.latitude, this.longitude)],
      destinations: [new google.maps.LatLng(50.087692, 14.421150)],
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

  private setCurrentPosition(): void {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}