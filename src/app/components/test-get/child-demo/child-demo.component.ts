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


  @Input() 
  inputValue! :string
  
  sayHello() {
    this.onClickBtn.emit(10010101)
  }
}
