import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title = 'TL;DR NY Bass';
  background: ThemePalette = undefined;

  constructor(private titleService: Title){};

  ngOnInit( ){
    this.titleService.setTitle(this.title);
  }

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
