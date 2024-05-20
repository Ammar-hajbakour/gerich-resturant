import { Component } from '@angular/core';
import { FooterOverlayComponent } from '../footer-overlay/footer-overlay.component';
import { NewsLetterComponent } from '../news-letter/news-letter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterOverlayComponent, NewsLetterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  copyrightYear: number = new Date().getFullYear();
}
