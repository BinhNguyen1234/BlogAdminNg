import { platformBrowser } from "@angular/platform-browser";
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { AppModule } from "./app/app.module";
import { config } from "./app/app.config";


platformBrowser().bootstrapModule(AppModule,config).catch((err) => console.error(err))
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
