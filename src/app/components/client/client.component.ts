import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-client',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './client.component.html'
})

export class ClientComponent{
    constructor() { }

}