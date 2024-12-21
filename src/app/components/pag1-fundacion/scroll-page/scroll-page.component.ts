import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-scroll-page',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './scroll-page.component.html',
})
export class ScrollPageComponent {

}
