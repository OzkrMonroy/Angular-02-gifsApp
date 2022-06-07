import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFs } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _apiKey: string = 'ImAkhHqUjefmBHlEZwvRTISRncfzAP98'
  private _history: string[] = [];
  public gifsResult: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history') || '[]');
    this.gifsResult = JSON.parse(localStorage.getItem('lastResults') || '[]');
  }

  get history(): string[] {
    return [...this._history]
  }

  searchGifs(word: string): void {
    if(!this._history.includes(word)){
      this._history.unshift(word)
      this._history = this._history.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history))

      this.http.get<GIFs>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${word}&limit=10`)
        .subscribe({
          next: (result) => {
            this.gifsResult = result.data
            localStorage.setItem('lastResults', JSON.stringify(result.data))
          }
        })
    }
  }
}
