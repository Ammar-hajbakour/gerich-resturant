import { Component } from '@angular/core';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';

@Component({
  selector: 'news-letter',
  standalone: true,
  imports: [SubHeadingComponent],
  templateUrl: './news-letter.component.html',
  styleUrl: './news-letter.component.scss'
})
export class NewsLetterComponent {

}
