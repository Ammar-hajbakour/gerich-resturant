import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild, ViewRef, signal } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.handlePlay()
  }
  playVideo = signal(false)

  @ViewChild('vidRef', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;
  handlePlay() {
    if (!this.videoRef) {
      console.error('Video reference not available');
      return;
    }

    if (!this.videoRef) {
      console.error('Native element of video reference not available');
      return;
    }

    if (typeof this.videoRef.nativeElement.pause !== 'function' || typeof this.videoRef.nativeElement.play !== 'function') {
      console.error('Pause or play function not available on video element');
      return;
    }

    if (this.playVideo()) {
      this.videoRef.nativeElement.pause();
    } else {
      this.videoRef.nativeElement.play();
    }
    this.playVideo.update((prev) => !prev);
  }


}
