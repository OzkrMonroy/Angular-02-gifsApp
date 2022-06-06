import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './components/gif-page/gif-page.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';



@NgModule({
  declarations: [
    GifPageComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifPageComponent
  ]
})
export class GifsModule { }
