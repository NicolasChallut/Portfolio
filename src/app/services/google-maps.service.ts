import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private mapsLoaded = false;

  // Charger Google Maps de façon asynchrone
  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.mapsLoaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBBMd6_uVLV_Kg5KnUsfCANVcwetaIwa-0&callback=initMap&loading=async`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        this.mapsLoaded = true;
        resolve();
      };

      script.onerror = (error) => {
        reject(error);
      };
    });
  }
}
