import { Component } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { LayoutModule } from "@angular/cdk/layout";
import { NavigationModule } from "../navigation/navigation.module";
@Component({
  selector: "app-test-layout",
  standalone: true,
  imports: [MatSlideToggleModule, LayoutModule, NavigationModule],
  template: `
  <app-top-bar></app-top-bar>
  <div>123123123</div>
    <mat-slide-toggle>Toggle ME!</mat-slide-toggle>
  `,
  styleUrl: "./test-layout.component.css"
})
export class TestLayoutComponent {

}
