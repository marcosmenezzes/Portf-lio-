import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { WritingComponent } from './pages/writing/writing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'photography/:slug', component: PhotographyComponent },
  { path: 'blog', component: WritingComponent, data: { section: 'blog' } },
  { path: 'blog/:slug', component: WritingComponent, data: { section: 'blog' } },
  { path: 'code', component: WritingComponent, data: { section: 'code' } },
  { path: 'code/:slug', component: WritingComponent, data: { section: 'code' } },
  { path: '**', redirectTo: '' }
];
