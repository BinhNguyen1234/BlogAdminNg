import { Component } from "@angular/core";
import {routes} from "../../app.routes";
@Component({
  selector: "app-slide-nav",
  templateUrl: "./slide-nav.component.html",
  styleUrl: "./slide-nav.component.css",

})
export class SlideNavComponent {
  navLinks = routes[0].children;
}
