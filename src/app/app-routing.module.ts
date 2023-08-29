import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent,
    data:{
      shouldDetach:true
      // reuse:true  
    }

  },
  {
    path:'tracking',
    component:MapComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
