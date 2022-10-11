import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

// const URL_API = `${environment.apiUrl}`;

export class CategoryService {

  constructor(private http: HttpClient) {
  }
  //
  // getAll(): Observable<any> {
  //   // return this.http.get<any>(URL_API + '/category');
  // }
}
