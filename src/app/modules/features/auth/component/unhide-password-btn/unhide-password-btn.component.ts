import { Component, Input, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-unhide-password-btn",
  templateUrl: "./unhide-password-btn.component.html",
  styleUrl: "./unhide-password-btn.component.css",
  host: {
    class : "position-absolute end-0 top-50 translate-middle-y",
    role: "button"
  }
})
export class UnhidePasswordBtnComponent {
  @Input() isPasswordHide = false;
  @Output() isPasswordHideChange = new Subject<boolean>();
  HandleClick (_e?:MouseEvent){
    this.isPasswordHide = !this.isPasswordHide;
    this.isPasswordHideChange.next(this.isPasswordHide);
  }
}
