import { Component, Input } from '@angular/core';
import { Drink } from '../../models/drink';
import { Award } from '../../models/award';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() title: string | null = null;
  @Input() price: number | null = null;
  @Input() tags: string[] | null = null;
}
