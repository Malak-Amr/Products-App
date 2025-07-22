import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.username && this.email && this.password) {
      alert(`Account created for ${this.username}`);
      this.router.navigate(['/login']);
    } else {
      alert('Please fill all the fields.');
    }
  }
}
