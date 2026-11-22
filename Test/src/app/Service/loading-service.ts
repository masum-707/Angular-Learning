import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  requestCount = signal<number>(0);
  isLoading = computed(() => this.requestCount() > 0);

  startLoading() {
    this.requestCount.update(count => count + 1);
  }

  stopLoading() {
    this.requestCount.update(count => Math.max(0, count - 1));
  }
}
