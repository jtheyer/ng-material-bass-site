import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JTH Bass Fishing';
  background: ThemePalette = undefined;
  links = [
    {
      label: 'Home',
      path: '/home'
    }, 
    {
      label: 'Spring',
      path: '/spring'
    }, 
    {
      label: 'Summer',
      path: '/summer'
    }, 
    {
      label: 'Fall',
      path: '/fall'
    }
  ];
  activeLink = this.links[0].path;


  /**
   * No use for this really.. just reference for now...
   */
  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
}
