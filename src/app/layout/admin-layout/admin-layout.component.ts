import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
@Component({
  selector: "app-admin-layout",
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div>Admin Layout</div>
  <div>Children layout is</div>
  <router-outlet>
  `,
  styleUrl: "./admin-layout.component.css"
})
export class AdminLayoutComponent {

}
