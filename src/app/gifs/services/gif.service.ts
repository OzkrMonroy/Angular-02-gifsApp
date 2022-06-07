import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFs } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _apiKey: string = 'ImAkhHqUjefmBHlEZwvRTISRncfzAP98'
  private _baseUrl: string = 'https://api.giphy.com/v1/gifs'
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
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', 10)
      .set('q', word);

    this.http.get<GIFs>(`${this._baseUrl}/search`, { params })
        .subscribe({
          next: (result) => {
            this.gifsResult = result.data
            localStorage.setItem('lastResults', JSON.stringify(result.data))
          }
        })
  }

  evaluateWord(word: string): void {
    if(!this._history.includes(word)){
      this._history.unshift(word)
      this._history = this._history.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history))
    }
    this.searchGifs(word);
  }
}
