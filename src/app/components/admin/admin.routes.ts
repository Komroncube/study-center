import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { TeacherComponent } from "./teacher/teacher.component";

export const ADMIN_ROUTES: Routes = [ 
    {
        path:'',
        component: AdminComponent,
        title: "Admin sahifasi"

    },
    {
        path: 'teacher',
        component: TeacherComponent,
        title: "Teacher page"
    }
]