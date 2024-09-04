import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin/admin.component";
import { TestComponent } from "./test/test.component";
import { CoreModule } from "@app/core.module";
import { CommonComponent } from "./common/common.component";
import { UserComponent } from "./user/user.component";
import { TagComponent } from "./tag/tag.component";
import { SettingsComponent } from "./settings/settings.component";
import { MediaComponent } from "./media/media.component";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { CategoriesComponent } from "./categories/categories.component";
import { PostComponent } from "./post/post.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthModule } from "../modules/features/auth/auth.module";

@NgModule({
  declarations: [
    AdminComponent, 
    PostComponent,
    TestComponent, 
    CategoriesComponent, 
    DashBoardComponent, 
    MediaComponent, 
    CommonComponent, 
    UserComponent, 
    TagComponent, 
    SettingsComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CoreModule,
    AuthModule,
],
  exports: [RouterModule]
})
export class LayoutModule { }
