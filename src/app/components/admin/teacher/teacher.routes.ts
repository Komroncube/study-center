import { Routes } from "@angular/router";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { AddEditTeacherComponent } from "./add-edit-teacher/add-edit-teacher.component";
import { TeacherComponent } from "./teacher.component";

export const TEACHER_ROUTES: Routes = [ 
    {
        path:'',
        redirectTo: 'teacher-list',
        pathMatch: 'full',
    },
    {
        path: 'teacher-list',
        component: TeacherListComponent,
        title: "teacher-list page"
    },
    {
        path: 'add-teacher',
        component: AddEditTeacherComponent,
        title: "add-teacher"
    },
    {
        path: 'edit-teacher/:id',
        component: AddEditTeacherComponent,
        title: "edit-teacher"
    }
]