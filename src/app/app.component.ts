import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
}
