import { Animes } from './../models/animes';
import { List } from './../models/list';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiTestService {
  API_URL = 'https://rafaelnevesapi.azurewebsites.net/api/v1/animes';

  constructor(private httpClient: HttpClient) {}


  getAnimes(): Observable<Animes[]> {
    return this.httpClient.get<Animes>(this.API_URL).pipe(map(res => res.result));
  }
}
