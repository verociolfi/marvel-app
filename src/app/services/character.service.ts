import { Character } from 'src/app/models/character';
import { environment } from './../../environments/environment.prod';
import { PaginationService } from './pagination.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  listCharacters$: Subject<Character[]> = new Subject();
  filter: string = "";
  limit: number = 10;
  pagination: number = 0;
  isLoadingList: boolean = false;
  constructor(private http: HttpClient, private paginationService: PaginationService) {
    this.paginationService.goSearch$.subscribe((refreshSearch) => this.getCharacters(refreshSearch))
  }

  getCharacters(refreshSearch: boolean) {
    this.isLoadingList = true;
    this.refreshPagination(refreshSearch);
    const page = this.getPage('characters');
    this.http.get<any>(page).pipe(map((data: any) => data.data)).subscribe(data => {
      if (refreshSearch) { this.refreshSearch(data); }
      this.listCharacters$.next(data.results);
      this.isLoadingList = false;
    })
  }
  refreshPagination(refreshSearch:boolean) {
    refreshSearch ? this.pagination = 0 : this.pagination = this.paginationService.getActualPage() * this.limit;
  }
  refreshSearch(data: any) {
    this.paginationService.setTotal(data.total);
  }

  getPage(page: string): string {
    const startWith = this.filter ? "&nameStartsWith=" + this.filter : "";
    return `${environment.apiUrl + page}?${startWith}&limit=${this.limit}&offset=${this.pagination}`;
  }
}
