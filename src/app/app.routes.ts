import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TeacherComponent } from './components/admin/teacher/teacher.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
    },
    { 
        path: 'admin', 
        component: AdminComponent,
        title:"Admin sahifasi",
        children: [
            {
                path:'teacher',
                component: TeacherComponent,
                title: 'teacher page'
            }
        ]
    },
    { 
        path: 'client', 
        component: ClientComponent,
        title: "Client sahifasi"
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
