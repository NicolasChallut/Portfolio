/// <reference types="google.maps" />

import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsService } from '../services/google-maps.service'; // Importez le service

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm!: FormGroup;
  map!: google.maps.Map;

  constructor(private googleMapsService: GoogleMapsService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      objet: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngAfterViewInit(): void {
    // Ajouter la fonction de callback `initMap` au `window` pour pouvoir y accéder
    (window as any).initMap = () => this.initMap();
    this.googleMapsService.load();
  }

  private initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 45.9246, lng: 6.7116 },
      zoom: 13,
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data: ', this.contactForm.value);
      alert('Votre message a été envoyé !');
      this.contactForm.reset();
    }
  }
}
