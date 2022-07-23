import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  PUBLIC_KEY = '87952e8e5f33d4856e5fefcfad3ac5b2';
  HASH = '16b22cbca93ad3caef1f08f168c32591';
  URL = `http://gateway.marvel.com/v1/public/`;

  constructor(private http: HttpClient) { }

  getPersonagens(): Observable<any> {
    const page = this.getPage('characters');
    return this.http.get<any>(page).pipe(map((data: any) => data.data.results))
  }

  getPage(page:string): string {
    return `${this.URL+page}?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
  }
}
