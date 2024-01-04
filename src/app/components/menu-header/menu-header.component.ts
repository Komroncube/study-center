import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {
  title = 'learn-angular';

  toggleUserMenu() {
     var userMenu = document.getElementById('user-menu') as HTMLElement;

     if (userMenu.classList.contains('hidden')) {
        userMenu.classList.remove('hidden');
     } else {
        userMenu.classList.add('hidden');
     }
  }
}
