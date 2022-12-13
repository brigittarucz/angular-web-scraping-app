import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Ingredient = {
  [key: string]: [];
};

export type IngredientsApi = {
  // [key: string]: string;
  ingredients: Ingredient[];
};

const url = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    // TODO: add params
    return this.http.get<Ingredient[]>(`${url}ingredients`);
  }
}
