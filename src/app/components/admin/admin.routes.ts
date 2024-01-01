import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
export const ADMIN_ROUTES: Routes = [ 
    {
        path:'',
        component: AdminComponent,
        title: "Admin sahifasi",
        children: [
            {
                path: 'teacher',
                loadChildren: () => import('./teacher/teacher.routes')
                    .then(teacher => teacher.TEACHER_ROUTES)
            }
        ]
    },
    
]