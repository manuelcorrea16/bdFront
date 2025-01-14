import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import "rxjs"

export interface Options {
  headers?: HttpHeaders;
}

@Injectable({ providedIn: 'root' })
export class HttpService {
  private API_ENDPOINT = 'http://localhost:3000/api';

  constructor(protected httpClient: HttpClient) { }

  public createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  postRequest<T, R>(path: string, data: T): Observable<R> {
    return this.httpClient
      .post<R>(
        `${this.API_ENDPOINT}/${path}`,
        data,
        this.createDefaultOptions()
      );
  }

  putRequest<T, R>(path: string, data: T): Observable<R> {
    return this.httpClient
      .put<R>(
        `${this.API_ENDPOINT}/${path}`,
        data,
        this.createDefaultOptions()
      );
  }

  getRequest<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(
      `${this.API_ENDPOINT}/${path}`,
      this.createDefaultOptions()
    );
  }
}
