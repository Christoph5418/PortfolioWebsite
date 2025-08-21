import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  scrollToHome() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToHomeSection();
      }, 100);
    });
  }

  scrollToHomeSection() {
    const targetElement = document.getElementById('home-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToExpertise() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToExpertiseSection();
      }, 100);
    });
  }

  scrollToExpertiseSection() {
    const targetElement = document.getElementById('expertise-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToProjects() {
    this.router.navigate(['/']).then(() => {
    setTimeout(() => {
      this.scrollToProjectsSection();
    }, 100);
  });
}

  scrollToMyWork() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToMyWorkSection();
      }, 100);
    });
  }

  scrollToMyWorkSection() {
    const targetElement = document.getElementById('my-work-section');
    if (targetElement) {
      const elementPosition = targetElement.offsetTop;
      const offset = 175;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }

scrollToProjectsSection() {
  const targetElement = document.getElementById('projects-section');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

scrollToExperiencesSection() {
  const targetElement = document.getElementById('experiences-section');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

scrollToExperiences() {
  this.router.navigate(['/']).then(() => {
  setTimeout(() => {
    this.scrollToExperiencesSection();
  }, 100);
});
}



}
