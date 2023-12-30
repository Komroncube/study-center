import { Component } from '@angular/core';
import { TeacherComponent } from './teacher/teacher.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: 'admin.component.html',
    imports: [RouterOutlet, TeacherComponent],
})

export class AdminComponent{
    constructor() { }

}