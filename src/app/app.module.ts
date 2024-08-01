import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { provideRouter, RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { UiModule } from "@shared/ui/ui.module";
import { provideAnimations } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    UiModule,
  ],
  providers: [
    provideRouter(routes),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
