import { ApplicationConfig, BootstrapOptions, CompilerOptions, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgZone } from '@angular/core'
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync()
  ]
};


export const config: (CompilerOptions & BootstrapOptions ) = {
  ngZone: new NgZone({ shouldCoalesceEventChangeDetection: true })
}