import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./component/login-form/login-form.component";
import { UiModule } from "@shared/ui/ui.module";
import { PasswordInputComponent } from "./component/password-input/password-input.component";
import { PasswordHiddenDirective } from "./directives/password-hidden.directive";



@NgModule({
  declarations: [LoginFormComponent, PasswordInputComponent, PasswordHiddenDirective],
  imports: [
    CommonModule,
    UiModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class AuthModule { }
