import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  itemList: string[] = ["one", "two", "three", "four", "five"];
  @Output() eventEmitter = new EventEmitter();

  selectItem(item: any) {
    this.eventEmitter.emit(item);
  }
}
