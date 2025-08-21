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
  isOpen2: boolean = false;

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
    if (this.isOpen1) {
      this.isOpen2 = false; // Close the other one when this opens
    }
  }

  switchOpen2(){
    this.isOpen2 = !this.isOpen2;
    if (this.isOpen2) {
      this.isOpen1 = false; // Close the other one when this opens
    }
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

      const arrowPhoneCanvas = document.getElementById('arrow-phone-lottie') as HTMLCanvasElement;
      if (arrowPhoneCanvas) {
        const arrowPhoneAnimation = new DotLottie({
          autoplay: true,
          loop: false,
          canvas: arrowPhoneCanvas,
          src: "/assets/images/misc/arrow_phone.lottie",
          speed: .75
        });

        // Custom loop with 3-second delay
        const restartAnimation = () => {
          setTimeout(() => {
            // Recreate the animation to restart it
            new DotLottie({
              autoplay: true,
              loop: false,
              canvas: arrowPhoneCanvas,
              src: "/assets/images/misc/arrow_phone.lottie",
              speed: .75
            });
            // Schedule next restart
            restartAnimation();
          }, 5000); // 3 seconds delay
        };

        // Start the loop after first animation completes
        setTimeout(restartAnimation, 2000); // Wait for first animation to complete
      }
    } catch (error) {
      console.error('Error initializing Lottie animation:', error);
    }
  }

  private initIntersectionObserver(): void {
    const expertiseHeading = document.querySelector('.expertise h1');
    const expertiseCards = document.querySelectorAll('.expertise-card');
    const myWorkSection = document.querySelector('.my-work-section');
    const projectsSection = document.querySelector('.projects-section');
    const experienceHeader = document.querySelector('.experience-header');
    const experiencesSection = document.querySelector('.experiences');
    
    if (expertiseHeading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-down-visible');
            observer.unobserve(entry.target); // Only trigger once
            
            // Start staggered animation for expertise cards
            this.animateExpertiseCards();
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before it's fully in view
      });
      
      observer.observe(expertiseHeading);
    }

    if (myWorkSection) {
      const myWorkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
            myWorkObserver.unobserve(entry.target); // Only trigger once
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before it's fully in view
      });
      
      myWorkObserver.observe(myWorkSection);
    }

    if (projectsSection) {
      const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
            projectsObserver.unobserve(entry.target); // Only trigger once
            
            // Start staggered animation for project cards
            this.animateProjectCards();
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before it's fully in view
      });
      
      projectsObserver.observe(projectsSection);
    }

    if (experienceHeader) {
      const experienceHeaderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
            experienceHeaderObserver.unobserve(entry.target); // Only trigger once
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before it's fully in view
      });
      
      experienceHeaderObserver.observe(experienceHeader);
    }

    if (experiencesSection) {
      const experiencesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
            experiencesObserver.unobserve(entry.target); // Only trigger once
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before it's fully in view
      });
      
      experiencesObserver.observe(experiencesSection);
    }
  }

  private animateExpertiseCards(): void {
    const expertiseCards = document.querySelectorAll('.expertise-card');
    expertiseCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-up-visible');
      }, index * 200); // 200ms delay between each card
    });
  }

  private animateProjectCards(): void {
    // Animate cards in the order: featured, 1, 2, 3, 4, 5 (matches new layout)
    const card1 = document.querySelector('.project-card[style*="grid-area: card1"]');
    const card2 = document.querySelector('.project-card[style*="grid-area: card2"]');
    const card3 = document.querySelector('.project-card[style*="grid-area: card3"]');
    const featuredCard = document.querySelector('.project-card.large-card');
    const card4 = document.querySelector('.project-card[style*="grid-area: card4"]');
    const card5 = document.querySelector('.project-card[style*="grid-area: card5"]');
    
    // Animate in sequence with delays
    if (featuredCard) setTimeout(() => featuredCard.classList.add('fade-up-visible'), 0);
    if (card1) setTimeout(() => card1.classList.add('fade-up-visible'), 150);
    if (card2) setTimeout(() => card2.classList.add('fade-up-visible'), 300);
    if (card3) setTimeout(() => card3.classList.add('fade-up-visible'), 450);
    if (card4) setTimeout(() => card4.classList.add('fade-up-visible'), 600);
    if (card5) setTimeout(() => card5.classList.add('fade-up-visible'), 750);
  }

  scrollToExpertise(): void {
    const expertiseSection = document.getElementById('expertise-section');
    if (expertiseSection) {
      const targetPosition = expertiseSection.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1.5 seconds for slower scroll
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = this.easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  }

  private easeInOutCubic(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }

}
