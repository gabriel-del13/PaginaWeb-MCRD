import { Component } from '@angular/core';
import { FooterCenterComponent } from '../footer/footer-center/footer-center.component';
import { HeaderCenterComponent } from '../header/header-center/header-center.component';
import { HeaderLeftComponent } from "../header/header-left/header-left.component";
import { HeaderRightComponent } from "../header/header-right/header-right.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderCenterComponent, FooterCenterComponent, HeaderLeftComponent, HeaderRightComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
