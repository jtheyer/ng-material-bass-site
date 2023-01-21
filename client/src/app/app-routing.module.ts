import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringContentComponent } from './spring-content/spring-content.component';
import { SummerContentComponent } from './summer-content/summer-content.component';
import { FallContentComponent } from './fall-content/fall-content.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  {path: 'home', component: HomeContentComponent },
  {path: 'spring', component: SpringContentComponent},
  {path: 'summer', component: SummerContentComponent},
  {path: 'fall', component: FallContentComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
