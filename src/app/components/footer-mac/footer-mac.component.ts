import { Component } from '@angular/core';
import { DockModule } from 'primeng/dock';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-footer-mac',
  standalone: true,
  imports: [DockModule],
  templateUrl: './footer-mac.component.html',
  styleUrl: './footer-mac.component.css'
})
export class FooterMacComponent {
  items: MenuItem[] | undefined;

  position:'bottom' | 'top' | 'left' | 'right' = 'bottom';

  

  ngOnInit() {
      this.items = [
          {
              label: 'Finder',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
          },
          {
              label: 'App Store',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
          },
          {
              label: 'Photos',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
          },
          {
              label: 'Trash',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
          }
      ];
  }
}
