import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { gsapFromTo } from '../../services/scroll-animations';

@Component({
  selector: 'app-find-us',
  standalone: true,
  imports: [SubHeadingComponent],
  templateUrl: './find-us.component.html',
  styleUrl: './find-us.component.scss'
})
export class FindUsComponent implements AfterViewInit {

  @ViewChild('imageSection') imageSection!: ElementRef<HTMLDivElement>;
  @ViewChild('infoSection') infoSection!: ElementRef<HTMLDivElement>;



  ngAfterViewInit(): void {
    gsapFromTo(this.imageSection.nativeElement, { 'xPercent': '-50', 'scale': '1.5' }, { 'xPercent': '0', 'scale': '1' })
    gsapFromTo(this.infoSection.nativeElement, { 'yPercent': '50' }, { 'yPercent': '0' })
    gsapFromTo(this.imageSection.nativeElement, { 'xPercent': '0', 'scale': '1' }, { 'xPercent': '-50', 'scale': '1.5' }, '75% center', 'bottom top')
    gsapFromTo(this.infoSection.nativeElement, { 'yPercent': '0' }, { 'yPercent': '-10' }, '75% center', 'bottom top')
  }

}
