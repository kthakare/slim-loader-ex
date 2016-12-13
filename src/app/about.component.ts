import { Component, OnInit } from '@angular/core';

import { Page }        from './Page';
import { Service } from './service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  //moduleId: module.id,
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css' ]
})

export class AboutComponent implements OnInit {
  pages: Page[] = [];

  constructor(private objService: Service, private slimLoader: SlimLoadingBarService) { }

  ngOnInit(): void {
    this.objService.getInfo()
      .then(pages => {
        this.slimLoader.complete();
        //this.spinner.stop();
        this.pages = pages
      });
  }

}


