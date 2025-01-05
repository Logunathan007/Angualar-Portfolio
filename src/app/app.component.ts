import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
