import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { ContactComponent } from './contact/contact.component';
import { ExtraComponent } from './extra/extra.component';
import { ResumeComponent } from './resume/resume.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path:'facesnaps/:id', component: SingleFaceSnapComponent},
    {path: 'facesnaps', component: FaceSnapListComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'extra',component:ExtraComponent},
    {path: 'resume',component:ResumeComponent},
    {path:'', component: LandingPageComponent}
];
