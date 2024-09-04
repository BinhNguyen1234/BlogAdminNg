import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { provideRouter, RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { provideAnimations } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LayoutModule } from "./layout/layout.module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    LayoutModule
  ],
  providers: [
    provideRouter(routes),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
