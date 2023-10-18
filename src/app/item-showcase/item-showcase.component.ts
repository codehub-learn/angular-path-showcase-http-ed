import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-showcase',
  templateUrl: './item-showcase.component.html',
  styleUrls: ['./item-showcase.component.scss']
})
export class ItemShowcaseComponent {
  @Input() itemToShowcase?: any;
}
