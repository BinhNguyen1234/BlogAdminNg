import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin/admin.component";
import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [AdminComponent, TestComponent],
  imports: [
    CommonModule
  ],
  exports: [TestComponent,AdminComponent]
})
export class LayoutModule { }
