import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { routes } from './app.routes';

// Mock document para SSR
const mockDocument = {
  documentElement: {
    classList: {
      add: () => {},
      remove: () => {},
      toggle: () => {},
    }
  },
  querySelector: () => null,
  querySelectorAll: () => [],
} as any;

export const config: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideServerRendering(),
    {
      provide: DOCUMENT,
      useValue: mockDocument
    }
  ]
};