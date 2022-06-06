import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  constructor(private gifsService: GifService) { }
  ngOnInit(): void {}

  get history(): string[]{
    return this.gifsService.history
  }

}
