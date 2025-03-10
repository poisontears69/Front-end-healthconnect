import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  showSpinner!: boolean;
  showNavMenu = false;
  isNavbarScrolled: boolean = false;
  currentSection: string = 'home';
  sections!: Element[];
  isMobileView: boolean = false;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the section is in view, set it as the current section
          this.currentSection = entry.target.id;
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
  );

  constructor(private _elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isNavbarScrolled = window.scrollY > 0;
    if (!this.sections) {
      // Get all sections
      this.sections =
        this._elementRef.nativeElement.querySelectorAll('.section');
    }
    // Observe each section
    this.sections.forEach((section: Element) => {
      this.observer.observe(section);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  scrollToSection(options: {
    sectionId: string;
    scrollBlockType?: ScrollLogicalPosition;
  }): void {
    const { sectionId, scrollBlockType } = options;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: scrollBlockType ?? 'center',
      });
    }
  }
}
