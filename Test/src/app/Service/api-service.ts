import { HttpClient, HttpContext, HttpContextToken } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SKIP_AUTH } from '../Interceptor/http-contex.token';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiService = inject(HttpClient);

  getPost() {
    return this.apiService.get('https://jsonplaceholder.typicode.com/posttt', {
      context: new HttpContext().set(SKIP_AUTH, true),
    });
    //   .subscribe({
    //   next: (res) => console.log('Success:', res),
    //   error: (err) => console.error('Error:', err),
    // });
  }
}
