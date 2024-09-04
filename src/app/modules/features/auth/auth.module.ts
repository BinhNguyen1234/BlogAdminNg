import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./component/login-form/login-form.component";
import { UiModule } from "@shared/ui/ui.module";



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports:[
    LoginFormComponent
  ]
})
export class AuthModule { }
