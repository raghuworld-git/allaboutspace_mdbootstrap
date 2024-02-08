import { Routes } from '@angular/router';
import { AstronautDetailComponent } from './astronaut-detail/astronaut-detail.component';
import { AstronautListComponent } from './astronaut-list/astronaut-list.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', component: AstronautListComponent },
    { path: ':page/:size', pathMatch: 'full', component: AstronautListComponent },
    { path: ':id', pathMatch: 'full', component: AstronautDetailComponent }
];
