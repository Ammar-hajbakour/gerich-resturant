import { AfterViewInit, Component, DestroyRef, ElementRef, OnInit, ViewChild, inject, signal } from '@angular/core';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { Drink } from '../../models/drink';
import { DataService, CName } from '../../services/data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { gsapFrom } from '../../services/scroll-animations';

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

    gsapFrom(this.menuImage.nativeElement, { 'y': '50', 'opacity': 0, 'delay': '0.5' })
    gsapFrom(this.wineSection.nativeElement, { 'xPercent': '-50', 'opacity': '0' })
    gsapFrom(this.cocktailSection.nativeElement, { 'xPercent': '50', 'opacity': '0' })
  }
}
