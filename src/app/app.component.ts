import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favorites: string[] = [];

  updateFavorites(favoriteCities: string[]) {
    this.favorites = favoriteCities;
  }
}
