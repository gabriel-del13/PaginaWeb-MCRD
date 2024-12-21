import { Component } from '@angular/core';
import { FooterCenterComponent } from '../../footer/footer-center/footer-center.component';
import { HeaderCenterComponent } from '../../header/header-center/header-center.component';
import { HeaderLeftComponent } from '../../header/header-left/header-left.component';
import { HeaderRightComponent } from '../../header/header-right/header-right.component';
import { ScrollPageComponent } from '../scroll-page/scroll-page.component';
import { MapComponent } from '../map/map.component';
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
  selector: 'app-main-fundacion',
  standalone: true,
  imports: [HeaderCenterComponent, FooterCenterComponent, HeaderLeftComponent, HeaderRightComponent,
    ScrollPageComponent, MapComponent, AboutUsComponent],
  templateUrl: './main-fundacion.component.html',
  styleUrl: './main-fundacion.component.css'
})
export class MainFundacionComponent {

}
