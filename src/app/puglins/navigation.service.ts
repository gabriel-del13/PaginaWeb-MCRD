import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentPageSubject = new BehaviorSubject<string>('Fundación');

  // Observable to track the current page
  currentPage$ = this.currentPageSubject.asObservable();

  // Method to update the current page
  setCurrentPage(page: string) {
    this.currentPageSubject.next(page);
  }

  // Method to get the current page
  getCurrentPage(): string {
    return this.currentPageSubject.value;
  }
}