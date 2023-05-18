import { Component } from '@angular/core';
import { Cabinet } from '../models/dummy';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cabinet-profile-presentation',
  templateUrl: './cabinet-profile-presentation.component.html',
  styleUrls: ['./cabinet-profile-presentation.component.scss']
})
export class CabinetProfilePresentationComponent {
  dummyCabinete: Cabinet[] = [];
  dummyCabinet: Cabinet = new Cabinet();
  rating:number=0;
  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };


  ngOnInit() {
    this.dummyCabinet.nume = "Dentalio SRL";
    this.dummyCabinet.adresa = "Strada Muresenilor nr. 16 Brasov";
    this.dummyCabinet.rating = "3";
    this.dummyCabinet.recenzii = ["recenzie", "recenzie"]
    this.dummyCabinete.push(this.dummyCabinet);

    this.rating=Number(this.dummyCabinet.rating)

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
