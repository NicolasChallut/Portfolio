import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { ContactComponent } from './contact/contact.component';
import { ExtraComponent } from './extra/extra.component';
import { ParcourComponent } from './parcour/parcour.component';

export const routes: Routes = [
    {path:'facesnaps/:id', component: SingleFaceSnapComponent},
    {path: 'facesnaps', component: FaceSnapListComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'extra',component:ExtraComponent},
    {path: 'parcour',component:ParcourComponent},
    {path:'', component: LandingPageComponent}
];
