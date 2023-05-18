import { Component } from '@angular/core';
import { Cabinet } from '../models/dummy';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent {
  dummyCabinete: Cabinet[] = [];
  dummyCabinet: Cabinet = new Cabinet();

  constructor() {}

  ngOnInit() {
    this.dummyCabinet.nume = "Dentalio SRL";
    this.dummyCabinet.adresa = "Strada Muresenilor nr. 16 Brasov";
    this.dummyCabinet.rating = "5.0";
    this.dummyCabinet.recenzii = ["recenzie", "recenzie"]
    this.dummyCabinete.push(this.dummyCabinet);
  }
}

