import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-unhide-password-btn",
  templateUrl: "./unhide-password-btn.component.html",
  styleUrl: "./unhide-password-btn.component.css"
})
export class UnhidePasswordBtnComponent {
  @Input() isPasswordHide = true;
  @Output() isPasswordHideChange = new EventEmitter<boolean>();
  HandleClick (_e:MouseEvent){
    this.isPasswordHide = !this.isPasswordHide;
    this.isPasswordHideChange.emit(this.isPasswordHide);
  }
}
