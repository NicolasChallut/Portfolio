import { Component } from '@angular/core';
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

constructor(private router:Router){}

onContinue(){
      this.router.navigateByUrl('contact')
    }
  
}
