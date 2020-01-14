import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { BusesListComponent } from './buses-list/buses-list.component';
import { LoginComponent } from './login/login.component';
import { PlacesDropdownComponent } from './places-dropdown/places-dropdown.component';



const routes: Routes = [
  {path : '', component: LoginComponent},
  {path: 'searchBuses', component: PlacesDropdownComponent },
  {path: 'buses', component: BusesListComponent },
  {path : 'bus/:name' , component: BusDetailsComponent},
  {path : '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
