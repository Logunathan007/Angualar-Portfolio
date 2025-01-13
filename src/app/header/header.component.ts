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
    'ABOUT',
    'EDUCATIOIN',
    'EXPERIENCE',
    'SKILLS',
    'PROJECTS',
    'CONTACT',
  ];
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
