import { NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  toggleMenu = signal(false);

  openMenu() {
    this.toggleMenu.set(true);
  }

  closeMenu() {
    this.toggleMenu.set(false);
  }
}
