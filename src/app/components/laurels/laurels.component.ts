import { AfterViewInit, Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { Award } from '../../models/award';
import { DataService } from '../../services/data.service';
import { AwardCardComponent } from '../award-card/award-card.component';
import { gsapFromTo } from '../../services/scroll-animations';

@Component({
  selector: 'app-laurels',
  standalone: true,
  imports: [SubHeadingComponent, AwardCardComponent],
  templateUrl: './laurels.component.html',
  styleUrl: './laurels.component.scss'
})
export class LaurelsComponent implements AfterViewInit {

  @ViewChild('imageSection') imageSection!: ElementRef<HTMLDivElement>;
  @ViewChild('infoSection') infoSection!: ElementRef<HTMLDivElement>;

  awards = signal<Award[]>([]);

  dataService = inject(DataService);

  ngOnInit() {
    this.dataService.getAll('awards').subscribe((data) => {
      this.awards.set(data as Award[]);
    })
  }
  ngAfterViewInit() {
    gsapFromTo(this.imageSection.nativeElement, { 'xPercent': '10', 'opacity': '0' }, { 'xPercent': '0', 'opacity': '1' })
    gsapFromTo(this.infoSection.nativeElement, { 'xPercent': '-10', 'opacity': '0' }, { 'xPercent': '0', 'opacity': '1' })
    gsapFromTo(this.imageSection.nativeElement, { 'yPercent': '0', 'opacity': '1' }, { 'yPercent': '20', 'opacity': '0' }, '75% center', 'bottom top')
    gsapFromTo(this.infoSection.nativeElement, { 'yPercent': '0', 'opacity': '1' }, { 'yPercent': '20', 'opacity': '0' }, '75% center', 'bottom top')
  }
}
