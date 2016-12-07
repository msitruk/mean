import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from "./about.component";
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from './about-section.component';

const aboutRoutes: Routes = [

    {
        path: '',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent,
                data: {
                    message: 'this is my data message'
                }
            },
            {
                path: ':username',
                component: AboutUserComponent
            }
        ]
    }

    // OTHER WAY
    //{ path: 'about', component: AboutComponent },
    //{ path: 'about/:username', component: AboutUserComponent },
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);