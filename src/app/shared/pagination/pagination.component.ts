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
  }

  prevPage() {
    this.paginationService.prevPage();
  }

  getActualPage(): number {
    return this.paginationService.getActualPage();
  }

  counter(i: number) {
    return new Array(i);
  }
}
