import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { ChildDemoComponent } from "../child-demo/child-demo.component";
@Component({
    selector: 'app-playground',
    standalone: true,
    templateUrl: './playground.component.html',
    styleUrl: './playground.component.css',
    imports: [InputTextModule, ReactiveFormsModule, KeyFilterModule, FormsModule, ChildDemoComponent]
})
export class PlaygroundComponent {
  /**
   * 
   */
  increase() {
    this.childCounter += 1
  }
    /**
   * 
   */
    text :string = "Hello World"
  
  form: FormGroup = new FormGroup({
    // word: new FormControl('')
  })
  submit() {
    window.alert(this.text)
  }
  
  counter :number = 3;
  childCounter: number = 0;
  twoWayCounter:number = 0;

  /**
   * 
   * @param $event 
   */
  handleChange($event: number) {
    this.childCounter = $event
  }
}
