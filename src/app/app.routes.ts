import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPageComponent } from './add-page/add-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'add',
        component: AddPageComponent,
        title: 'Add Patient'
    }
];

export default routes;