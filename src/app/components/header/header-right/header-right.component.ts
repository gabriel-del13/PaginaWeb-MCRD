import { Component } from '@angular/core';
import { DarkModeButtonComponent } from "../../dark-mode-button/dark-mode-button.component";

@Component({
  selector: 'app-header-right',
  standalone: true,
  imports: [DarkModeButtonComponent],
  templateUrl: './header-right.component.html',
})
export class HeaderRightComponent {

}
