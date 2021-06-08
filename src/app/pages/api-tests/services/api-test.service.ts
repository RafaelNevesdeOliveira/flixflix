import { Animes } from './../models/animes';
import { List } from './../models/list';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiTestService {
  API_URL = 'https://rafaelnevesapi.azurewebsites.net/api/v1/animes';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /**
   *
   * @Type Obtem toda a lista
   */
  getAnimes(): Observable<Animes[]> {
    return this.httpClient
      .get<Animes>(this.API_URL)
      .pipe(map((res) => res.result));
  }

  getAnimesById(_id: number): Observable<Animes> {
    return this.httpClient
      .get<Animes>(this.API_URL + '/' + _id)
      .pipe(retry(2), catchError(this.handleError));
  }

  createAnimes(anime: Animes) {
    return this.httpClient.post(this.API_URL, anime)
  }

  saveAnimes(anime: Animes): Observable<Animes> {
    return this.httpClient
      .post<Animes>(this.API_URL, JSON.stringify(anime), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateAnimes(anime: Animes): Observable<Animes> {
    return this.httpClient
      .put<Animes>(
        this.API_URL + '/' + anime._id,
        JSON.stringify(anime),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteAnimes(anime: Animes) {
    return this.httpClient
      .delete<Animes>(this.API_URL + '/' + anime._id, this.httpOptions)
      .pipe(
        map((res) => res.result),
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status},` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
