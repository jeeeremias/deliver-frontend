import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

import { Address } from './address';

@Component({
  selector: 'address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: [ './address-autocomplete.component.css' ]
})
export class AddressAutocompleteComponent implements OnInit {

  private address: Address;

  @ViewChild("address")
  public addressElem: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.address.latitude = 0;
    this.address.longitude = 0;

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.addressElem.nativeElement, {
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
          this.address.latitude = place.geometry.location.lat();
          this.address.longitude = place.geometry.location.lng();
        });
      });
    });
  }

  public getAddress(): Address {
    return this.address;
  }
}