import { Component } from '@angular/core';
import {Country} from "../../domain/country";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  countryList: Country[] = [];

  constructor(private countryService: CountryService) {
    this.countryService.getCountries().subscribe((fetchedCountries) => {
      this.countryList = fetchedCountries.slice(0, 10);
    })
  }
}
