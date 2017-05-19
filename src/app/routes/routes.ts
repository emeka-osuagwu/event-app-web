import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components';
import { HallService } from '../services';


// import { AuthGuard } from './_guards/index';
export const navigateComponent = [
	HomeComponent
]

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent, resolve: {halls: HallService}},
    { path: 'login', component: HomeComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);