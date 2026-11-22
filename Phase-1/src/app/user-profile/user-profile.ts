import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  student = {
    userName: 'Masum',
    email: 'abc@gmail.com',
    role: 'student',
    mark: 70,
    xyz: null,
  };

  isEligible(): string {
    if (this.student.mark > 80) {
      return 'Excellent ,you are eligible for .....';
    } else {
      return 'you are not eligible';
    }
  }
  changeMark(x: number): number {
    this.student.mark += x;
    return this.student.mark;
  }
  changeName(): void {
    if (this.student.userName === 'Masum') {
      this.student.userName = 'ABC';
    } else {
      this.student.userName = 'Masum';
    }
  }
}
