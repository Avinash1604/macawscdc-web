import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-testimonials-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.css']
})
export class TestimonialsCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  testimonials = [
    {
      name: 'Harrison Foster',
      city: 'BANDUNG',
      quote: 'Quisque egestas consectetuer imperdiet sodales pretium ridiculus proin. Integer praesent nostra est cras potenti egestas. Rhoncus pharetra molestie ipsum urna magna proin consectetur.',
      avatar: 'assets/theme/avatar1.jpg'
    },
    {
      name: 'Jordan Thomson',
      city: 'JAKARTA',
      quote: 'Quisque egestas consectetuer imperdiet sodales pretium ridiculus proin. Integer praesent nostra est cras potenti egestas. Rhoncus pharetra molestie ipsum urna magna proin consectetur.',
      avatar: 'assets/theme/avatar2.jpg'
    },
    {
      name: 'Scarlett Gallagher',
      city: 'BANDUNG',
      quote: 'Quisque egestas consectetuer imperdiet sodales pretium ridiculus proin. Integer praesent nostra est cras potenti egestas. Rhoncus pharetra molestie ipsum urna magna proin consectetur.',
      avatar: 'assets/theme/avatar3.jpg'
    }
  ];

  private autoSub?: Subscription;
  currentIndex = 0;
  private autoPlayMs = 3500; // time between slides
  private pauseOnHover = true;
  private isHovered = false;

  ngAfterViewInit(): void {
    // start auto-scroll
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.stopAutoScroll();
    this.autoSub = interval(this.autoPlayMs).subscribe(() => {
      if (this.pauseOnHover && this.isHovered) return;
      this.next();
    });
  }

  stopAutoScroll() {
    if (this.autoSub) {
      this.autoSub.unsubscribe();
      this.autoSub = undefined;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.scrollToIndex(this.currentIndex);
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.scrollToIndex(this.currentIndex);
  }

  scrollToIndex(index: number) {
    const container = this.carousel.nativeElement as HTMLElement;
    const cards = container.querySelectorAll('.testimonial-card') as NodeListOf<HTMLElement>;
    const card = cards[index];
    if (!card) return;

    // Calculate horizontal scroll so the card is centered in the container
    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const currentScroll = container.scrollLeft;

    // card's left relative to container's scroll content
    const offsetLeft = card.offsetLeft;
    const scrollTarget = offsetLeft - (container.clientWidth - card.clientWidth) / 2;

    // Smooth horizontal scroll of the container only (prevents page vertical jumps)
    container.scrollTo({ left: Math.max(0, Math.round(scrollTarget)), behavior: 'smooth' });
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.scrollToIndex(index);
  }
}
