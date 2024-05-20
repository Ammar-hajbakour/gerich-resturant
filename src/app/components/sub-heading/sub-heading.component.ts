import { Component, Input } from '@angular/core';

@Component({
  selector: 'sub-heading',
  standalone: true,
  imports: [],
  templateUrl: './sub-heading.component.html',
  styleUrl: './sub-heading.component.scss'
})
export class SubHeadingComponent {
  @Input() title = '';
}
