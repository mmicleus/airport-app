import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {HttpClientModule} from '@angular/common/http';
import { FiltersComponent } from './landing-page/filters/filters.component'
import {ReactiveFormsModule} from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FlightDetailModalComponent } from './landing-page/flight-detail-modal/flight-detail-modal.component'
import { MatDialogModule } from '@angular/material/dialog';
import { GoogleMapsModule } from '@angular/google-maps';
import { CustomRouteReuseStrategy } from './CustomReusingStrategy';
import { MapComponent } from './map/map.component';
import { TableComponent } from './map/table/table.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AboutComponent } from './about/about.component';
// import { CustomReusingStrategy, CustomRouteReuseStrategy } from './CustomReusingStrategy';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FiltersComponent,
    SpinnerComponent,
    FlightDetailModalComponent,
    MapComponent,
    TableComponent,
    AlertComponent,
    PaginationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    GoogleMapsModule,
    MatPaginatorModule,
    
  ],
  providers: [ { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
