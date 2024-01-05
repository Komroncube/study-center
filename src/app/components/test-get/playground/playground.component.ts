import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {
  value: string|undefined;
  form: FormGroup = new FormGroup({
    word: new FormControl('')
  })
  submit() {
    window.alert(this.value)
  }
}
