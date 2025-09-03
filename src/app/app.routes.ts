import { Routes } from '@angular/router';
import { Main } from './pages/main/main';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: Main }
];
