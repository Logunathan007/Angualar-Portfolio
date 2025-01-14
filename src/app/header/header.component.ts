import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainBodyComponent } from '../main-body/main-body.component';
import { CommonService } from '../shared/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MainBodyComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  //nav bar variable
  isNavOpen = true;
  currentSection = 0;
  navTitles = [
    { name: 'ABOUT', icon: 'about.png' },
    { name: 'EDUCATION', icon: 'education.png' },
    { name: 'EXPERIENCE', icon: 'experience.png' },
    { name: 'SKILLS', icon: 'skills.png' },
    { name: 'PROJECTS', icon: 'projects.png' },
    { name: 'CONTACT', icon: 'contact.png' },
  ];

  //subject
  sectionSubject!: Subscription;

  constructor(public commonService: CommonService) {}
  ngOnInit(): void {
    this.subscribeAllService();
  }
  ngOnDestroy(): void {
    this.unSubscribeAllService();
  }
  subscribeAllService() {
    this.sectionSubject = this.commonService.$updateSelectedSection.subscribe(
      (val: number) => {
        this.currentSection = val;
      }
    );
  }
  unSubscribeAllService() {
    this.sectionSubject && this.sectionSubject.unsubscribe();
  }
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    setTimeout(() => {
      this.commonService.$updateCursor.next(true);
    }, 1000);
  }

  updateScroll() {
    // console.log('check scrolling');
    this.commonService.$updateCursor.next(true);
  }

  updateSection(index: number) {
    this.commonService.$updateSelectedSection.next(index);
  }
}
