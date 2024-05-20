import { Component, Input } from '@angular/core';
import { Award } from '../../models/award';

@Component({
  selector: 'award-card',
  standalone: true,
  imports: [],
  templateUrl: './award-card.component.html',
  styleUrl: './award-card.component.scss'
})
export class AwardCardComponent {
  @Input() award!: Award
}
