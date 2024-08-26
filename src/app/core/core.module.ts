import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { SlideNavComponent } from "./slide-nav/slide-nav.component";
import { NgbModule, NgbNav } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [TopNavComponent, SlideNavComponent,],
  imports: [
    CommonModule,
    NgbModule,
    NgbNav,
    RouterModule
  ],
  exports: [TopNavComponent, SlideNavComponent]
})
export class CoreModule { }
