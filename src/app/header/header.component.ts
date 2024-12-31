import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
    isMenuOpen: boolean = false;
  
    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen; // Inverse l'état du menu
    }
  
    closeMenu(): void {
      this.isMenuOpen = false; // Ferme le menu
    }
  
    onNavLinkClick(): void {
      this.closeMenu(); // Ferme le menu lorsque l'utilisateur clique sur un lien de navigation
    }
  }
