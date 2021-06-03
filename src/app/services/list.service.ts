import { Animal } from './../interfaces/animal.interface';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }


  // getSearchValue(): Observable<Animal> {
  //   return this.http.get('https://api.publicapis.org/entries')
  //   .pipe(map( (items: any) => {
  //     return items;
  // }))}


  getAll(): Observable<Animal> {
    return this.http.get('https://api.publicapis.org/entries')
    .pipe(map( (items: any) => {
      return items;
  }))

  }
  
}
