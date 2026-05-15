import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  showVideo = false;
  // default embedded YouTube video (replace with any YouTube ID or local file)
  videoSrc = 'https://www.youtube.com/embed/e8QW7NO5q7Y';
  sanitizedVideoSrc: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  openVideo() {
    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
    this.showVideo = true;
  }

  closeVideo() {
    this.showVideo = false;
    // clear src to stop playback and avoid keeping unsafe reference
    this.sanitizedVideoSrc = null;
  }
}

