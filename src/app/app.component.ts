import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Suppose que ce composant est aussi standalone
import { ContactComponent } from './contact/contact.component'; // Le composant contact standalone

@Component({
  selector: 'app-root',
  standalone: true, // Indique que ce composant est standalone
  imports: [
    RouterOutlet, // Importation du RouterOutlet pour la navigation
    HeaderComponent, // Le header en standalone
    ContactComponent // Le composant contact
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
