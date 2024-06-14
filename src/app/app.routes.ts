import { Routes } from '@angular/router';

// Component
import { LandingPageComponent } from './component/landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'home', component: LandingPageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
