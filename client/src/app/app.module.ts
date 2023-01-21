import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { AboutComponent } from './about/about.component';
import { SpringContentComponent } from './spring-content/spring-content.component';
import { SummerContentComponent } from './summer-content/summer-content.component';
import { FallContentComponent } from './fall-content/fall-content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { AppBaitsComponent } from './app-baits/app-baits.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTabsComponent,
    AboutComponent,
    // SpringContentComponent,
    // SummerContentComponent,
    // FallContentComponent,
    // HomeContentComponent,
    AppBaitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})

export class AppModule { }
