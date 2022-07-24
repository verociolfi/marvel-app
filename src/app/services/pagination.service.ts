import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  totalPages$:Subject<number> = new Subject();
  actualPage:number = 0;
  constructor() { }

}
