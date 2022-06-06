import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _history: string[] = [];

  constructor() { }

  get history(): string[] {
    return [...this._history]
  }

  searchGifs(word: string) {
    if(!this._history.includes(word)){
      this._history.unshift(word)
      this._history = this._history.splice(0, 10);
    }
  }
}
