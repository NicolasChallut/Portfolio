import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
  <div *ngIf="isVisible">
    Contenu conditionnel
  </div>
`,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    GoogleMapsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Définissez le centre de la carte et le niveau de zoom
  center: google.maps.LatLngLiteral = { lat: 48.8566, lng: 2.3522 }; // Paris par exemple
  zoom = 12; 

  contactForm!: FormGroup;

  ngOnInit(): void {

    if (typeof google !== 'undefined') {
      console.log('Google Maps API chargé');
    } else {
      console.error('Google Maps API non chargé');
    }// Zoom initial

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data: ', this.contactForm.value);
      alert('Votre message a été envoyé !');
      this.contactForm.reset(); // Réinitialiser le formulaire après soumission
    }
  }
}
