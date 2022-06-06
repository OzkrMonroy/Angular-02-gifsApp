import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @ViewChild('searchText') searchWordInput!: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    const text = this.searchWordInput.nativeElement.value
    console.log(text);
    
    this.searchWordInput.nativeElement.value = ''
  }

}
