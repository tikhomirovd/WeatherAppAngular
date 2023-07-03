import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  weatherData: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cityName = params.get('city');
      if (cityName) {
        this.weatherService.getWeather(cityName).subscribe(data => {
          this.weatherData = data;
        });
      }
    });
  }
}
