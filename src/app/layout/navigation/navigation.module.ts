import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { UiModule } from "../../shared/ui/ui.module";
import { TestComponent } from "src/app/test/test.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [TopBarComponent, TestComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    UiModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
],
  exports: [TopBarComponent, TestComponent]
})
export class NavigationModule { }
