import { Component } from '@angular/core';
import { TeacherComponent } from './teacher/teacher.component';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: 'admin.component.html',
    imports: [TeacherComponent],
})

export class AdminComponent{
    constructor() { }

}