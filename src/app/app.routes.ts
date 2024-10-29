import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { MymusicpageComponent } from './mymusicpage/mymusicpage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CeremoniesPageComponent } from './ceremonies-page/ceremonies-page.component';
import { EventPlanningPageComponent } from './event-planning-page/event-planning-page.component';
import { SoundSystemPageComponent } from './sound-system-page/sound-system-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicespageComponent },
    { path: 'my-music', component: MymusicpageComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'services-sound-system', component: SoundSystemPageComponent },
    { path: 'services-event-planning', component: EventPlanningPageComponent },
    { path: 'services-ceremonies', component: CeremoniesPageComponent },

    { path: '**', redirectTo: ''},
];
