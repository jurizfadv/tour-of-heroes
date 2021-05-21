import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  /** Log a HeroService message with the MessageService */
  private log(message:string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  private heroesUrl = 'api/heroes'; // URL to web api

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // Initially assuming a hero with the specified ID always exists.
    // Error handling later.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetch hero id=${id}`);
    return of(hero);
  }
}
