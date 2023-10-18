import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(){
    return ["one", "two", "three", "four", "five"];
  }

  getLocalItems(){
    let baseUrl= "assets/sample_data/users.json";
    return this.http.get<User[]>(baseUrl);
  }
}
