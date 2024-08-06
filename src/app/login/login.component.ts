import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService = inject(AuthService);
  user: User | any = '';
  private token: string = ''

  constructor(private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  async submitForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value.email, this.loginForm.value.password)
      this.authService.login(this.loginForm.value.email ?? '', this.loginForm.value.password ?? '').subscribe(
        (response) => {
          this.user = response.user;
          this.token = response.authorisation.token;
          console.log('User logged in:', response);
          this.authService.setToken(this.token, this.user);
          this.router.navigate([''])
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
