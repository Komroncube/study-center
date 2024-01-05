import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './accordion.component.html',
  styles: `
    .card-box {
      border:5px dashed blue;
    }
  `
})
export class AccordionComponent {

}
