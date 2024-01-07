import { Component, Output, EventEmitter, Input } from '@angular/core';



@Component({
  selector: 'app-child-demo',
  standalone: true,
  imports: [],
  templateUrl: './child-demo.component.html',
  styleUrl: './child-demo.component.css'
})
export class ChildDemoComponent {
  @Output()
  onClickBtn = new EventEmitter<number>();

  @Output()
  counterChange = new EventEmitter<number>();

  @Input()
  counter:number = 0

  @Input() 
  inputValue! :string
  
  sayHello() {
    this.onClickBtn.emit(10010101)
  }
  incrementAndDouble() {
    this.counter += 1
    this.counterChange.emit(this.counter * 2)
  }
}
