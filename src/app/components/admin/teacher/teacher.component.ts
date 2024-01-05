import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [],
  templateUrl: `./teacher.component.html`,
  styles: `
    :host {
      display: block;
    }
  `
})
export class TeacherComponent { }
