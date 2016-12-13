import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { AboutComponent }      from './about.component';

import { DetailComponent }  from './details.component';
import { Service }          from './service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
