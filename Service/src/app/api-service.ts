import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpService = inject(HttpClient);
  apiURL = 'https://dummyjson.com/users';
  getExistingUser(): Observable<any> {
    return this.httpService.get(this.apiURL);
  }
}
