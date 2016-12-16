import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Routes, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router'
import { Service } from './service'
import {MarkdownModule} from 'angular2-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})

export class AppComponent {

  private details: any;
  private sub: any;

  constructor(private router: Router,
    private slimLoader: SlimLoadingBarService, private appService: Service) {

    this.changeFavicon('http://www.google.com/favicon.ico');
    //this.details = appService.GetApplicationDetails(id);
    //appService.SetApplicationFavicon(id,basepath,this.details.Icon);
    
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.slimLoader.start();
      }
      else if (event instanceof NavigationEnd ||
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

  //change favicon
  document.head = document.head || document.getElementsByTagName('head')[0];

  changeFavicon(src): any {
  var link = document.createElement('link'),
    oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

}
