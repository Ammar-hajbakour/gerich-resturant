import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SpecialMenuComponent } from './components/special-menu/special-menu.component';
import { ChefComponent } from './components/chef/chef.component';
import { IntroComponent } from './components/intro/intro.component';
import { LaurelsComponent } from './components/laurels/laurels.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FindUsComponent } from './components/find-us/find-us.component';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';
import { FooterComponent } from './components/footer/footer.component';


const Components = [
  NavbarComponent,
  HeaderComponent,
  AboutComponent,
  SpecialMenuComponent,
  ChefComponent,
  IntroComponent,
  LaurelsComponent,
  GalleryComponent,
  FindUsComponent,
  VerticalNavComponent,
  FooterComponent
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...Components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gerich-resturant';

}
