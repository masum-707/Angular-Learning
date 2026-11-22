import { Component, inject } from "@angular/core";
import { LoadingService } from "../Service/loading-service";
import { ApiService } from "../Service/api-service";


@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  loadingService = inject(LoadingService);
  apiService = inject(ApiService);
  posts: any[] = [];
  errorMessage = '';

  getPost() {
    this.apiService.getPost().subscribe({
      next: (data: any) => {
        this.posts = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
