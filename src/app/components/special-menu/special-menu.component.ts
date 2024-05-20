import { AfterViewInit, Component, DestroyRef, ElementRef, OnInit, ViewChild, inject, signal } from '@angular/core';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { Drink } from '../../models/drink';
import { Award } from '../../models/award';
import { DataService, CName } from '../../services/data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { gsapFromTo } from '../../services/scroll-animations';

@Component({
  selector: 'app-special-menu',
  standalone: true,
  imports: [SubHeadingComponent, MenuItemComponent],
  templateUrl: './special-menu.component.html',
  styleUrl: './special-menu.component.scss'
})
export class SpecialMenuComponent implements OnInit, AfterViewInit {


  @ViewChild('menuImg') menuImage!: ElementRef<HTMLDivElement>;

  @ViewChild('wineSection') wineSection!: ElementRef<HTMLDivElement>;

  @ViewChild('cocktailSection') cocktailSection!: ElementRef<HTMLDivElement>;

  wineItems = signal<Drink[]>([]);
  cocktailItems = signal<Drink[]>([]);

  dataService = inject(DataService);

  destroyRef = inject(DestroyRef);

  getData(collection: CName) {
    this.dataService.getAll(collection).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      switch (collection) {
        case 'wines':
          this.wineItems.set(data as Drink[]);
          break;
        case 'cocktails':
          this.cocktailItems.set(data as Drink[]);
          break;

        default:
          break;
      }
    })
  }
  ngOnInit() {
    this.getData('wines');
    this.getData('cocktails');
  }

  ngAfterViewInit(): void {
    gsapFromTo(this.menuImage.nativeElement, { 'opacity': 0, 'delay': '0.5' }, { 'opacity': '1', 'delay': '0.5' })
    gsapFromTo(this.wineSection.nativeElement, { 'x': '150', 'opacity': '0' }, { 'x': '0', 'opacity': '1' })
    gsapFromTo(this.cocktailSection.nativeElement, { 'x': '-150', 'opacity': '0' }, { 'x': '0', 'opacity': '1' })
  }
}
