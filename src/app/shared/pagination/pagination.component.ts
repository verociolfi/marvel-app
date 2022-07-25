import { PaginationService } from './../../services/pagination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  numberOfPages: number = 0;
  constructor(private paginationService: PaginationService) {
    this.paginationService.totalPages$.subscribe(data => this.numberOfPages = data);
  }

  ngOnInit(): void {
  }

  nextPage() {
    this.paginationService.nextPage();
    window.scroll({top: 0,  behavior: 'smooth'});
  }

  prevPage() {
    this.paginationService.prevPage();
    window.scroll({top: 0,  behavior: 'smooth'});
  }

  getActualPage(): number {
    return this.paginationService.getActualPage()+1;
  }

  totalPages(): number {
    return this.numberOfPages == 0 ? 1 : this.numberOfPages;
  }

  counter(i: number) {
    return new Array(i);
  }
}
