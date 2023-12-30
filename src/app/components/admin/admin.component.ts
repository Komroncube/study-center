import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: 'admin.component.html',
    imports: [RouterOutlet],
})

export class AdminComponent{
    constructor() { }

}