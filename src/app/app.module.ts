import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { provideRouter, RouterModule } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { routes } from "./app.routes";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
