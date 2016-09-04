import { Component } from '@angular/core';
import { MoviesComponent } from './movies';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MoviesComponent]
})
export class AppComponent {
  title = 'app works for sdn!';
}
