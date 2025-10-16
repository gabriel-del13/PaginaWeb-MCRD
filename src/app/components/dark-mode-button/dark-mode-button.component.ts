import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode-button.component.html',
})
export class DarkModeButtonComponent implements OnInit {
  isDarkMode = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;
    
    const savedMode = localStorage.getItem('isDarkMode');
    this.isDarkMode = savedMode === 'true';
    this.applyTheme();
  }

  toggleTheme() {
    if (!this.isBrowser) return;
    
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    this.applyTheme();
  }

  private applyTheme() {
    if (!this.isBrowser) return;
    
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}