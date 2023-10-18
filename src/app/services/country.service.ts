import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../domain/country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl = "https://restcountries.com/v3.1/all";

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<Country[]>(this.baseUrl);
  }
}
