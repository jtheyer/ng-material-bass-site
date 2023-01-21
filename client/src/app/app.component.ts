import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JTH Bass Fishing';
  // activeTabIndex = 0;
  // selectedTabChange = 0;
  // season = 'home' //Winter!! lol..

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
  constructor(){
    // if (this.season == 'home'){
    //   this.activeTabIndex = 0;
    //   this.selectedTabChange = 0;
    // }
    // if (this.season == 'spring'){
    //   this.activeTabIndex = 1;
    //   this.selectedTabChange = 1;
    // }
    // if (this.season == 'summer'){
    //   this.activeTabIndex = 2;
    //   this.selectedTabChange = 2;
    // }
    // if (this.season == 'fall'){
    //   this.activeTabIndex = 3;
    //   this.selectedTabChange = 3;
    // }
  };

  // changeSeason(tabChangeEvent: MatTabChangeEvent) {
  //   switch (tabChangeEvent.index) {
  //     case 0:
  //       this.season = 'home';
  //       this.activeTabIndex = 0;
  //       this.selectedTabChange = 0;
  //       break;
  //     case 1:
  //       this.season = 'spring';
  //       this.activeTabIndex = 1;
  //       this.selectedTabChange = 1;
  //       break;
  //     case 2:
  //       this.season = 'summer';
  //       this.activeTabIndex = 2;
  //       this.selectedTabChange = 2;
  //       break;
  //     case 3:
  //       this.season = 'fall';
  //       this.activeTabIndex = 3;
  //       this.selectedTabChange = 3;
  //       break;
  //   }
  // }
}
