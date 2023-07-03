import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailsComponent } from './city-details/city-details.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

const routes: Routes = [
  { path: 'details/:city', component: CityDetailsComponent },
  { path: '', component: CurrentWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
