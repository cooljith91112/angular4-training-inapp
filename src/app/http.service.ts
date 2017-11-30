import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.myjson.com/bins';
  }

  postData(data: string) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(this.apiUrl, data, {
      headers: headers
    });
  }

}
