import { Routes } from '@angular/router';
import { FirstDestinationComponent } from './components/routing-training/first-destination/first-destination.component';
import { SecondDestinationComponent } from './components/routing-training/second-destination/second-destination.component';
import { NotFoundComponent } from './components/routing-training/not-found/not-found.component';
import { AppComponent } from './app.component';
import { FirstChildComponent } from './components/routing-training/first-destination/first-child/first-child.component';
import { SecondChildComponent } from './components/routing-training/first-destination/second-child/second-child.component';

export const routes: Routes = [
    {
        path:'first/:id', 
        component: FirstDestinationComponent,
         children: [
             {path: 'child-a', component: FirstChildComponent},
             {path: 'child-b', component: SecondChildComponent}
        ]
    },
     {path:'second/:id', component: SecondDestinationComponent},
    // {path: 'aaa', redirectTo: '/first/1', pathMatch: 'prefix'}, // if 'path' is like '/aaa/**',
     //{path: '', redirectTo: '/first/5', pathMatch: 'full'}, // if 'path' === '/',
    // {path: '', redirectTo: '/first/3', pathMatch: 'prefix'}, // if 'path' is like '/**',
    // {path: 'bbb', redirectTo: '/second/2', pathMatch: 'full'}, // if 'path' === '/bbb' or '/bbb/'
    {path: '**', component: NotFoundComponent},
];
