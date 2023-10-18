import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedItem?: any = "Select an item";

  updateItem($event: any) {
    this.selectedItem = $event;
  }
}
