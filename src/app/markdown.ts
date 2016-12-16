import { Component, Input } from 'angular2/core';
import marked from 'marked';

@Component({
  selector: 'markdown', 
  template: `
    <div [innerHTML]="convertedData">
    </div>
  `
})
export class MarkdownComponent {
  @Input('data')
  data:string;

  ngOnChanges() { 
    console.log('1 - '+marked(this.data));
    this.convertedData = marked(this.data);
  }
}