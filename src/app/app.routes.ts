import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'photography/:slug', component: PhotographyComponent },
  { path: '**', redirectTo: '' }
];
