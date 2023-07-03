import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  weatherData: any;
  @Output() favorites = new EventEmitter<any[]>();
  public favoriteCities: any[] = []; // Изменяем тип на массив объектов

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    const storedFavorites = localStorage.getItem('favoriteCities');
    if (storedFavorites) {
      this.favoriteCities = JSON.parse(storedFavorites);
      this.favorites.emit(this.favoriteCities);
    }
  }

  searchWeather(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe(data => {
      this.weatherData = data;
    });
  }

  addToFavorites(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe((data: any) => {
      this.favoriteCities.push({name: data.name, temp: data.main.temp});
      localStorage.setItem('favoriteCities', JSON.stringify(this.favoriteCities));
      this.favorites.emit(this.favoriteCities);
    });
  }
}
