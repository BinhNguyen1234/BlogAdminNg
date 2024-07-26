import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { provideRouter, RouterModule } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { routes } from "./app.routes";
import { UiModule } from "@shared/ui/ui.module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    UiModule
  ],
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
