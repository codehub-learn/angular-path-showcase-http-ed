import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-path-showcase-http-ed';
  selectedItem?: any;

  updateItem($event: any) {
    this.selectedItem = $event;
  }
}
