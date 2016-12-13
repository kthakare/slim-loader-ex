import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { Routes, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError  } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  private sub: any;

  constructor(private router: Router,
              private slimLoader: SlimLoadingBarService) {

    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.slimLoader.start();
      }
      else if ( event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        //this.slimLoader.complete();
      }
    }, (error: any) => {
      this.slimLoader.complete();
    });
  }

  ngOnDestroy(): any {
    this.sub.unsubscribe();
  }

}
