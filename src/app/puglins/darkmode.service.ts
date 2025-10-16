import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: any // ✅ Cambiado a 'any' para evitar problemas de tipo
  ) {
    // ✅ Solo inicializa en el navegador
    if (this.isBrowser) {
      this.initializeDarkMode();
    }
  }

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  toggleDarkMode() {
    if (!this.isBrowser) return;
    
    const newDarkModeState = !this.darkMode.value;
    this.darkMode.next(newDarkModeState);
    this.updateDarkMode(newDarkModeState);
  }

  private updateDarkMode(isDark: boolean) {
    if (!this.isBrowser) return;
    
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
      }
      
      if (this.document?.documentElement) {
        this.document.documentElement.classList.toggle('dark', isDark);
      }
    } catch (error) {
      console.error('Error updating dark mode:', error);
    }
  }

  initializeDarkMode() {
    if (!this.isBrowser) return;
    
    try {
      let isDark = false;

      if (typeof localStorage !== 'undefined') {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
          isDark = savedMode === 'enabled';
        } else if (typeof window !== 'undefined' && window.matchMedia) {
          isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
      }

      this.darkMode.next(isDark);
      this.updateDarkMode(isDark);

      // Escuchar cambios en preferencias del sistema
      if (typeof window !== 'undefined' && window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          if (typeof localStorage === 'undefined' || !localStorage.getItem('darkMode')) {
            this.updateDarkMode(e.matches);
            this.darkMode.next(e.matches);
          }
        });
      }
    } catch (error) {
      console.error('Error initializing dark mode:', error);
    }
  }
}