import { AfterViewInit, Component, DestroyRef, ElementRef, OnDestroy, OnInit, ViewChild, inject, signal } from '@angular/core';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { DataService } from '../../services/data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { gsapFromTo } from '../../services/scroll-animations';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SubHeadingComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {


  dataService = inject(DataService);
  private readonly destroyRef = inject(DestroyRef);

  galleryImages = signal<string[]>([]);

  @ViewChild('scrollRef') scrollRef!: ElementRef;
  @ViewChild('gallery') gallery!: ElementRef<HTMLDivElement>;
  @ViewChild('info') info!: ElementRef<HTMLDivElement>;

  scroll(direction: 'left' | 'right') {
    if (!this.scrollRef || !this.scrollRef.nativeElement) {
      console.error('scrollRef is null or nativeElement is null');
      return;
    }
    const scrollLeft = this.scrollRef.nativeElement.scrollLeft;
    const end = 316 * (this.galleryImages().length - 2);
    if (direction === 'left') {
      if (scrollLeft === 0) {
        this.scrollRef.nativeElement.scrollLeft = end;
      } else {
        this.scrollRef.nativeElement.scrollLeft -= 316;
      }
    } else if (direction === 'right') {
      if (scrollLeft === end) {
        this.scrollRef.nativeElement.scrollLeft = 0;
      } else {
        this.scrollRef.nativeElement.scrollLeft += 316;
      }
    }
  }

  ngOnInit(): void {
    this.fetchGalleryImages();
  }

  private fetchGalleryImages(): void {
    this.dataService.getAll('galleryImages')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(images => this.galleryImages.set(images));
  }

  ngAfterViewInit(): void {
    gsapFromTo(this.gallery.nativeElement, { 'xPercent': '200', 'duration': '2' }, { 'xPercent': '0', 'duration': '2' })
    gsapFromTo(this.info.nativeElement, { 'opacity': '0' }, { 'opacity': '1' })
    gsapFromTo(this.gallery.nativeElement, { 'opacity': '1' }, { 'opacity': '0' }, '75% center', 'bottom top')
    gsapFromTo(this.info.nativeElement, { 'opacity': '1' }, { 'opacity': '0' }, '75% center', 'bottom top')
  }


}
