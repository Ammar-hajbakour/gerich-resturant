import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { gsapFromTo } from '../../services/scroll-animations';


@Component({
  selector: 'app-chef',
  standalone: true,
  imports: [SubHeadingComponent],
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.scss'
})
export class ChefComponent implements AfterViewInit {

  @ViewChild('chefImg') chefImg!: ElementRef<HTMLDialogElement>
  @ViewChild('chefInfo') chefInfo!: ElementRef<HTMLDialogElement>

  ngAfterViewInit(): void {
    gsapFromTo(this.chefImg.nativeElement, { 'xPercent': '-50', 'yPrecent': '-50', 'rotate': 90 }, { 'xPercent': '0', 'yPrecent': '0', 'rotate': '0' })
    gsapFromTo(this.chefImg.nativeElement, { 'xPercent': '0', 'yPrecent': '0', 'rotate': '0' }, { 'xPercent': '-50', 'yPrecent': '-50', 'rotate': 90 }, '75% center', 'bottom top')
    gsapFromTo(this.chefInfo.nativeElement, { 'xPercent': '20' }, { 'xPercent': '0' })
    gsapFromTo(this.chefInfo.nativeElement, { 'xPercent': '0' }, { 'xPercent': '20' }, '75% center', 'bottom top')
  }
}
