import { Routes } from '@angular/router';
import { TestLayoutComponent } from './layout/test-layout/test-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
export const routes: Routes = [
    {
        path: "test",
        component: TestLayoutComponent,
        title: "test"
    },
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: "admin",
        component: AdminLayoutComponent,
        children: [
            {
                path: "dashboard",
                title: "dashboard",
                component: TestLayoutComponent,
            },
            {
                path: "post",
                title: "post",
                component: TestLayoutComponent,
            },
            {
                path: "user",
                title: "user",
                component: TestLayoutComponent,
            },
            {
                path: "settings",
                title: "settings",
                component: TestLayoutComponent,
            }
        ]
    },
    {
        path: "auth",
        component: TestLayoutComponent,
        title: "auth"
    },
    

];
