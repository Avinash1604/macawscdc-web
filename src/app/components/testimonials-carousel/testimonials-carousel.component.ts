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
      name: 'Ayan S., Parent',
      city: 'Bangalore',
      quote: 'The therapists are patient, knowledgeable, and truly committed to every child’s progress',
      avatar: 'assets/theme/avatar1.jpg',
      rating: 5
    },
    {
      name: 'Riya Father',
      city: 'Bangalore',
      quote: 'The personalized therapy plan and regular progress updates made a huge difference for us.',
      avatar: 'assets/theme/avatar2.jpg',
      rating: 4
    },
    {
      name: 'Anjali M., Mother',
      city: 'Jayanagar',
      quote: 'What we appreciate most is the guidance for parents. The home-based tips and continuous support helped us see real improvements in behavior and learning.',
      avatar: 'assets/theme/avatar3.jpg',
      rating: 5
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

  onImgError(event: Event, name: string) {
    const img = event.target as HTMLImageElement;
    if (!img) return;
    const fallback = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name || 'User');
    if (img.src !== fallback) img.src = fallback;
  }
}
