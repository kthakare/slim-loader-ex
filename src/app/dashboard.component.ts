import { Component, OnInit } from '@angular/core';


import { Page } from './Page';
import { Service } from './service';
import { Routes, Router, NavigationEnd, ActivatedRoute  } from '@angular/router'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  //moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {
  pages: Page[] = [];
  //public isRequesting: boolean;
  constructor(private objService: Service,  private router: Router, private slimLoader: SlimLoadingBarService) {
  }

  ngOnInit(): void {
    //this.isRequesting = true;
      this.objService.getPages()
        .then(pages => {
          this.slimLoader.complete();
          //this.spinner.stop();
          this.pages = pages
        });

  }

}


