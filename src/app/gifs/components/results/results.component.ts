import { Component, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
  }
  get results(): Gif[]{
    return this.gifService.gifsResult
  }

}
