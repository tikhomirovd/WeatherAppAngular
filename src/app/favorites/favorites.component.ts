import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input() favorites: any[] = [];
  @Output() favoritesChange = new EventEmitter<any[]>();

  removeFromFavorites(city: any) {
    this.favorites = this.favorites.filter(favorite => favorite.name !== city.name);
    localStorage.setItem('favoriteCities', JSON.stringify(this.favorites));
    this.favoritesChange.emit(this.favorites);
  }

}
