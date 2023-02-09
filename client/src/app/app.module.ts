import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';


import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';


/**
 * After making the baits service, to use *ngFor in 
 * HomeContentComponent <div> the import and declaration below
 * was necessary. 
 * Basically.. my components/tabs are imported in route module for routes
 * and a second time here for use of showing within the router-outlet
 **/
import { HomeContentComponent } from './home-content/home-content.component';
import { SpringContentComponent } from './spring-content/spring-content.component';
import { SummerContentComponent } from './summer-content/summer-content.component';
import { FallContentComponent } from './fall-content/fall-content.component';
import { BaitCardComponent } from './bait-card/bait-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    SpringContentComponent,
    SummerContentComponent,
    FallContentComponent,
    BaitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})

export class AppModule { }
