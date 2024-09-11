import { Component, Input } from "@angular/core";

@Component({
  selector: "app-password-input",
  templateUrl: "./password-input.component.html",
  styleUrl: "./password-input.component.css",
  host: {
    class : "position-relative"
  }
})
export class PasswordInputComponent {
  @Input() useUnhidePassword = false;
  isHide = true;
}
