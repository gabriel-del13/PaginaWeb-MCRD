import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode-button.component.html',
})
export class DarkModeButtonComponent implements OnInit{
  @ViewChild('switchToggle', { static: true }) switchToggle!: ElementRef;

  isDarkMode = false;

  darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>`;

  lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>`;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const savedMode = localStorage.getItem('isDarkMode');
    this.isDarkMode = savedMode === 'true';
    this.switchTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    this.switchTheme();
  }

  private switchTheme() {
    const switchToggle = this.switchToggle.nativeElement;
    
    if (this.isDarkMode) {
      this.renderer.removeClass(switchToggle, 'bg-yellow-500');
      this.renderer.addClass(switchToggle, 'bg-gray-700');
      this.renderer.setProperty(switchToggle, 'innerHTML', this.darkIcon);
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.addClass(switchToggle, 'bg-yellow-500');
      this.renderer.removeClass(switchToggle, 'bg-gray-700');
      this.renderer.setProperty(switchToggle, 'innerHTML', this.lightIcon);
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
}
