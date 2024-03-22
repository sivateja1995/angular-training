import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
})
export class Child2Component {
  @Input() subTitle: string = '';
  @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();



  public onClick(){
    this.clickEvent.emit('data from child 2')
  }
}
