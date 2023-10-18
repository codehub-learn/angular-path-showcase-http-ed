import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() message?: string = "Hello with default message";
  @Output() eventEmitter = new EventEmitter();

  emitEvent(){
    this.eventEmitter.emit("hello from within the child");
  }
}
