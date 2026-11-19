import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  ApiService = inject(HttpClient);

  getPost() {
    return this.ApiService.get('https://jsonplaceholder.typicode.com/posts/-10').subscribe({
    next: (res) => console.log('Success:', res),
    error: (err) => console.error('Error:', err)
  });

  }
  
}
