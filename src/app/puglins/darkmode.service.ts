import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private get isLocalStorageAvailable(): boolean {
    return isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined';
  }

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  toggleDarkMode() {
    const newDarkModeState = !this.darkMode.value;
    this.darkMode.next(newDarkModeState);
    this.updateDarkMode(newDarkModeState);
  }

  private updateDarkMode(isDark: boolean) {
    if (this.isLocalStorageAvailable) {
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    }
    
    if (this.isBrowser) {
      document.documentElement.classList.toggle('dark', isDark);
    }
  }

  initializeDarkMode() {
    let isDark = false;

    if (this.isLocalStorageAvailable) {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode) {
        isDark = savedMode === 'enabled';
      } else if (this.isBrowser) {
        // Solo verifica preferencias del sistema si no hay modo guardado
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    }

    this.darkMode.next(isDark);
    this.updateDarkMode(isDark);

    if (this.isBrowser) {
      // Escuchar cambios en preferencias del sistema
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!this.isLocalStorageAvailable || !localStorage.getItem('darkMode')) {
          this.updateDarkMode(e.matches);
          this.darkMode.next(e.matches);
        }
      });
    }
  }
}