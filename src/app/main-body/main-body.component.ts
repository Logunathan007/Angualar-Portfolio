import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-main-body',
  imports: [CommonModule,HomeComponent],
  standalone:true,
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss'
})
export class MainBodyComponent {
  navTitles = [
    "ABOUT","EDUCATIOIN","EXPERIENCE","SKILLS","PROJECTS","CONTACT"
  ]
}
