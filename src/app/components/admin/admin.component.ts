import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: 'admin.component.html',
    styleUrl: 'admin.component.css',
    imports: [RouterOutlet, RouterLink, NzLayoutModule, NzIconModule, NzBreadCrumbModule, NzMenuModule],
})

export class AdminComponent{
    isCollapsed:boolean = false;


}