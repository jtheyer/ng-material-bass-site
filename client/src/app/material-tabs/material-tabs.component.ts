import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
// // why is 'spring-content' not a known element in my Angular app? It's causing my app to crash 

@Component({
  selector: 'material-tabs',
  templateUrl: './material-tabs.component.html',
  styleUrls: ['./material-tabs.component.scss']
})
export class MaterialTabsComponent {
  links = ['Spring', 'Summer', 'Fall'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  // Code me a heap sort algorithm function in Python 3.10

  // what is heap sort's big O notation?
}
