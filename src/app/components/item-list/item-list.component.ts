import {Component, EventEmitter, Output} from '@angular/core';
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  itemList?: string[];
  @Output() eventEmitter = new EventEmitter();

  constructor(private itemService: ItemService) {
    this.itemList = this.itemService.getItems();
    this.itemService.getLocalItems().subscribe((itemsFetched) => {
      //console.log(itemsFetched[0]["name"]);
      console.log(itemsFetched[0].name);
      console.log(itemsFetched[0].age);
      for (let itemsFetchedElement of itemsFetched) {
        console.log(itemsFetchedElement.id)
      }
    })
  }

  selectItem(item: any) {
    this.eventEmitter.emit(item);
  }
}
