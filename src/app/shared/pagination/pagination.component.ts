import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  numberOfPages: number = 1;
  constructor(private characterService: CharacterService) {
    this.characterService.totalPages$.subscribe(number => this.numberOfPages = number);
  }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
}
}
