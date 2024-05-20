import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOverlayComponent } from './footer-overlay.component';

describe('FooterOverlayComponent', () => {
  let component: FooterOverlayComponent;
  let fixture: ComponentFixture<FooterOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
