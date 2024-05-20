import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SubHeadingComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('infoSection') infoSection!: ElementRef<HTMLDivElement>;
  @ViewChild('imageSection') imageSection!: ElementRef<HTMLDivElement>;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }
  ngAfterViewInit(): void {
    this.scrollAnimation()
  }
  ngOnInit() {

  }

  scrollAnimation() {
    gsap.to(this.infoSection.nativeElement, {
      scrollTrigger: {
        trigger: this.infoSection.nativeElement,
        scrub: 1,
        start: '-50 top',
      },
      duration: 2,
      delay: 0.5,
      yPercent: 50,
      opacity: 0,
    })

    gsap.to(this.imageSection.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSection.nativeElement,
        scrub: 1,
        start: '-300 top',
      },
      duration: 2,
      delay: 0.5,
      xPercent: 50,
      rotation: 115,
      scale: 0.5,
      opacity: 0
    })
  }
}
