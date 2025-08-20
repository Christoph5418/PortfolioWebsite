import { AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import * as AOS from 'aos'
import { DotLottie } from '@lottiefiles/dotlottie-web';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit{

  constructor(private router: Router) {

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });

  }
  isPhone: boolean = false;
  isOpen1: boolean = false;

  ngOnInit(): void {
    this.updatePhoneDetection();
  } 

  ngAfterViewInit(): void {
    this.initLottieAnimation();
    this.initIntersectionObserver();
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.updatePhoneDetection();
  }

  updatePhoneDetection() {
    if(window.innerWidth <= 675){
      this.isPhone = true
    } else {
      this.isPhone = false
    }
  }

  onMouseMove(e: MouseEvent){
    const target = e.currentTarget as HTMLElement;

    const rect = target.getBoundingClientRect();
    
      const mousex = e.clientX - rect.left;
      const mousey = e.clientY - rect.top;
    
    const gradientStyle = `radial-gradient(800px circle at ${mousex}px ${mousey}px, rgba(255, 255, 255, .07), transparent 40%)`;
    target.style.background = gradientStyle;
  }

  onMouseLeave(e: MouseEvent){
    const target = e.currentTarget as HTMLElement;

    const gradientStyle = ``;
    target.style.background = gradientStyle;
  }


  switchOpen(){
    this.isOpen1 = !this.isOpen1;
  }

  private initLottieAnimation(): void {
    try {
      const canvas = document.getElementById('arrow-down-lottie') as HTMLCanvasElement;
      if (canvas) {
        new DotLottie({
          autoplay: true,
          loop: true,
          canvas: canvas,
          src: "/assets/images/misc/arrow.lottie",
          speed: 0.75
        });
      }
    } catch (error) {
      console.error('Error initializing Lottie animation:', error);
    }
  }

  private initIntersectionObserver(): void {
    const expertiseHeading = document.querySelector('.expertise h1');
    if (expertiseHeading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-down-visible');
            observer.unobserve(entry.target); // Only trigger once
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before it's fully in view
      });
      
      observer.observe(expertiseHeading);
    }
  }

  scrollToExpertise(): void {
    const expertiseSection = document.getElementById('expertise-section');
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

}
