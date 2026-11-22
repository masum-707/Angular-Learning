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

  getPost() {
     this.apiService.getPost().subscribe((data) => {
      this.posts = data as any[];
    });
  }
  

  
}
