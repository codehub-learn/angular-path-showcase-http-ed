import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemShowcaseComponent } from './components/item-showcase/item-showcase.component';
import {HttpClientModule} from "@angular/common/http";
import { CountryListComponent } from './components/country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ItemListComponent,
    ItemShowcaseComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
