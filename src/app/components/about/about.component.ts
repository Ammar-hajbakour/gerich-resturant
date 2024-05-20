import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsapFrom } from '../../services/scroll-animations';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('knife') knife!: ElementRef<HTMLImageElement>;
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLHeadingElement>;
  @ViewChild('historySection') historySection!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    gsapFrom(this.knife.nativeElement, { 'yPercent': '50' })
    gsapFrom(this.aboutSection.nativeElement, { 'xPercent': '-50' })
    gsapFrom(this.historySection.nativeElement, { 'xPercent': '50' })
  }
}
