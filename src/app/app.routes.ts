import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { getTestBed } from '@angular/core/testing';
import { TestGetComponent } from './components/test-get/test-get.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
    },
    { 
        path: 'admin', 
        loadChildren: () => import('./components/admin/admin.routes')
            .then(route => route.ADMIN_ROUTES)
    },

    { 
        path: 'client', 
        loadChildren: () => import('./components/client/client.routes')
            .then(route=>route.CLIENT_ROUTES)
    },
    {
        path: 'test',
        component: TestGetComponent
    },
    {
        path: 'menu',
        component: MenuHeaderComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
