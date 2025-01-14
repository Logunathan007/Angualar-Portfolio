import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainBodyComponent } from '../main-body/main-body.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MainBodyComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isNavOpen = true;
  navTitles = [
    { name: 'ABOUT', icon: 'about.png' },
    { name: 'EDUCATIOIN', icon: 'education.png' },
    { name: 'EXPERIENCE', icon: 'experience.png' },
    { name: 'SKILLS', icon: 'skills.png' },
    { name: 'PROJECTS', icon: 'projects.png' },
    { name: 'CONTACT', icon: 'contact.png' },
  ];

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
