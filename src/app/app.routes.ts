import { Routes } from '@angular/router';

// Component
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { ResumeComponent } from './component/resume/resume.component';

export const routes: Routes = [
    { path: 'home', component: LandingPageComponent },
    { path: 'resume', component: ResumeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
