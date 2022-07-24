import { PaginationService } from './pagination.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  allCharacters$: Subject<any> = new Subject();
  PUBLIC_KEY = '87952e8e5f33d4856e5fefcfad3ac5b2';
  HASH = '16b22cbca93ad3caef1f08f168c32591';
  URL = `http://gateway.marvel.com/v1/public/`;
  private pagination: number;
  private total: number;
  private limit: number = 10;
  totalPages$:Subject<number> = new Subject();
  constructor(private http: HttpClient, private paginationService: PaginationService) { }
  getPersonagens(filter?: string) {
    const page = this.getPage('characters', filter);
    this.http.get<any>(page).pipe(map((data: any) => data.data)).subscribe(data => {
      this.paginationService.setTotal(data.total);
      this.allCharacters$.next(data.results);
    })
  }

  getPage(page: string, filter?: string): string {
    const startWith = filter ? "&nameStartsWith=" + filter : "";
    return `${this.URL + page}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}${startWith}&limit=10`;
  }

  getPagination(): number {
    return this.pagination;
  }

  getTotalPages(): Observable<number> {

  }



  nextPage() {
    if (this.getPagination())
  }

  prevPage() {

  }
}
