import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '76897f2bc223d13c41411b6ba4900221';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string) {
    return this.http.get(`${this.apiUrl}?q=${cityName}&appid=${this.apiKey}`);
  }
}
