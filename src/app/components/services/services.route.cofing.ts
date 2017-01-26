import { ServiceComponent } from './../service/service.component';
import { ServicesComponent } from './services.component';
import { Routes } from '@angular/router';


export const servicesRouteConfig: Routes = [
    {
        path: 'service',
        children: [
            { path: '', component: ServicesComponent },
            { path: ':active', component: ServiceComponent },
        ]
    }
];