import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EyesSVGComponent } from "./svg/eyes/eyes.component";
import { EyesSlashSVGComponent } from "./svg/eyes-slash/eyes-slash.component";

@NgModule({
  declarations: [EyesSVGComponent, EyesSlashSVGComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:  [EyesSVGComponent, EyesSlashSVGComponent]
})
export class UiModule { 

}
