import { Component, HostListener, signal, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
	imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

	ngAfterViewInit(): void {
		const w = window as any;
		let attempts = 0;
		const maxAttempts = 50; // ~5s of retries
		const tryInit = () => {
			try {
				const $ = w.jQuery || w.$;
				if ($ && typeof $.fn.smartmenus === 'function') {
					$('#menu-1-7351bbc').smartmenus();
					$('#menu-2-7351bbc').smartmenus();
					return;
				}
			} catch (e) {
				console.warn('SmartMenus init attempt failed', e);
			}

			attempts++;
			if (attempts < maxAttempts) {
				setTimeout(tryInit, 100);
			} else {
				console.warn('SmartMenus not available after retries');
			}
		};

		tryInit();
	}
}
