import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { AboutComponent }      from './about.component';
import { DetailComponent }  from './details.component';
// import { DemoMarkdownComponent } from './demomarkdown':

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent   },
  { path: 'about', component: AboutComponent   },
  { path: 'detail/:id', component: DetailComponent },
  // { path: 'demomarkdown', component:DemoMarkdownComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}

