import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../puglins/navigation.service';

@Component({
  selector: 'app-header-center',
  standalone: true,
  imports: [],
  templateUrl: './header-center.component.html',
})
export class HeaderCenterComponent implements OnInit {
  currentPage: string = '';

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    // Suscribirse al cambio de página
    this.navigationService.currentPage$.subscribe(page => {
      this.currentPage = page;
    });

    // Establecer la página inicial
    this.navigationService.setCurrentPage('Fundación');
  }

  setPage(page: string) {
    this.navigationService.setCurrentPage(page);
 }
}