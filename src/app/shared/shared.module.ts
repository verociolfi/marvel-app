import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    PaginationComponent,
    CardDetailComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CardComponent, SearchComponent, PaginationComponent, LoadingComponent]
})
export class SharedModule { }
