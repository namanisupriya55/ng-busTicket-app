import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesDropdownComponent } from './places-dropdown/places-dropdown.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { BusesListComponent } from './buses-list/buses-list.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import {BusesDataServiceService} from './buses-data-service.service';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlacesDropdownComponent,
    PageNotFoundComponent,
    BusDetailsComponent,
    BusesListComponent,
    LoginComponent,
    BusInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [BusesDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
