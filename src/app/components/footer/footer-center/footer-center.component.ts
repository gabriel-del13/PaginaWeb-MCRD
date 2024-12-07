import { Component } from '@angular/core';
import { DarkModeButtonComponent } from "../../dark-mode-button/dark-mode-button.component";

@Component({
  selector: 'app-footer-center',
  standalone: true,
  imports: [DarkModeButtonComponent],
  templateUrl: './footer-center.component.html',
  styleUrl: './footer-center.component.css'
})
export class FooterCenterComponent {

}
