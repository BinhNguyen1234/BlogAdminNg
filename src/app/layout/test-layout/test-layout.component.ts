import { Component } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { LayoutModule } from "@angular/cdk/layout";
import { NavigationModule } from "../navigation/navigation.module";
import { UiModule } from "../../shared/ui/ui.module";
@Component({
  selector: "app-test-layout",
  standalone: true,
  imports: [MatSlideToggleModule, LayoutModule, NavigationModule, UiModule],
  template: `
  <app-top-bar></app-top-bar>
  <app-search-bar placeholder="Search">
  <div>123123123</div>
    <mat-slide-toggle>Toggle ME!</mat-slide-toggle>
  `,
  styleUrl: "./test-layout.component.css"
})
export class TestLayoutComponent {

}
