import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCenterComponent } from './footer-center.component';

describe('FooterCenterComponent', () => {
  let component: FooterCenterComponent;
  let fixture: ComponentFixture<FooterCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
