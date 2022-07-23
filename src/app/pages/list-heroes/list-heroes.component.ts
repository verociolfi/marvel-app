import { CharacterService } from './../../services/character.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {
  allCharacters?: Observable<any>;
  constructor(private characterService:CharacterService) { }

  ngOnInit (): void {
    this.getCharacters();
  }
  getCharacters() {
    this.allCharacters = this.characterService.getPersonagens();
  }
}
