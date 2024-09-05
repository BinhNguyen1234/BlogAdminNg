import { Component } from "@angular/core";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.css"
})
export class LoginFormComponent {
  handleSubmit(e: SubmitEvent){
    e.preventDefault();
    console.log(e);
  }
}
