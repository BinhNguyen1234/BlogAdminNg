import { Routes } from "@angular/router";
import { AdminComponent } from "./layout/admin/admin.component";
import { TestComponent } from "./layout/test/test.component";
export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "admin",
        component: AdminComponent,
        children: [
            {
                path: "dashboard",
                title: "dashboard",
                component: TestComponent,
            },
            {
                path: "post",
                title: "post",
                component: TestComponent,
            },
            {
                path: "user",
                title: "user",
                component: TestComponent,
            },
            {
                path: "media",
                title: "media",
                component: TestComponent,
            },
            {
                path: "settings",
                title: "settings",
                component: TestComponent,
            },
            {
                path: "categories",
                title: "categories",
                component: TestComponent,
            },
            {
                path: "tag",
                title: "Tag",
                component: TestComponent,
            },
            {
                path: "comment",
                title: "Tag",
                component: TestComponent,
            }
        ]
    },
    {
        path: "auth",
        component: TestComponent,
        title: "auth"
    },
    {
        path: "test",
        component: TestComponent,
        title: "test"
    },

];
