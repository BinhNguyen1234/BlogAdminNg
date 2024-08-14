import { Routes } from "@angular/router";
import { TestComponent } from "./layout/test/test.component";
import { CommonComponent } from "./layout/common/common.component";
import { DashBoardComponent } from "./layout/dash-board/dash-board.component";
import { PostComponent } from "./layout/post/post.component";
import { UserComponent } from "./layout/user/user.component";
import { MediaComponent } from "./layout/media/media.component";
import { SettingsComponent } from "./layout/settings/settings.component";
import { CategoriesComponent } from "./layout/categories/categories.component";
import { TagComponent } from "./layout/tag/tag.component";
import { CommentComponent } from "./layout/comment/comment.component";
export const routes: Routes = [
    //no protect route
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    // protect route
    {
        path: "admin",
        component: CommonComponent,
        title: "admin",
        children: [
            {
                path: "dashboard",
                title: "dashboard",
                component: DashBoardComponent,
            },
            {
                path: "post",
                title: "post",
                component: PostComponent,
            },
            {
                path: "user",
                title: "user",
                component: UserComponent,
            },
            {
                path: "media",
                title: "media",
                component: MediaComponent,
            },
            {
                path: "settings",
                title: "settings",
                component: SettingsComponent,
            },
            {
                path: "categories",
                title: "categories",
                component: CategoriesComponent,
            },
            {
                path: "tag",
                title: "Tag",
                component: TagComponent,
            },
            {
                path: "comment",
                title: "comment",
                component: CommentComponent,
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

