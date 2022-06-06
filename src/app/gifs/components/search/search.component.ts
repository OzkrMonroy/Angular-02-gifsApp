import { GifService } from '../../services/gif.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @ViewChild('searchText') searchWordInput!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifService) { }

  ngOnInit(): void {
  }

  search(): void {
    const text = this.searchWordInput.nativeElement.value
    if(text.trim() !== ''){
      console.log(text);
      this.gifsService.searchGifs(text);
      
      this.searchWordInput.nativeElement.value = ''
    }
  }

}
