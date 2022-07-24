import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  totalPages$:Subject<number> = new Subject();
  actualPage:number = 0;
  constructor() { }
  setTotal(total: number): void {
    this.totalPages$.next(Math.round(total/this.limit));
  }
  nextPage() {
    if (this.getPagination())
  }

  prevPage() {

  }
}
