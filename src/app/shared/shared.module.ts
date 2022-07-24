import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CardComponent, SearchComponent]
})
export class SharedModule { }
