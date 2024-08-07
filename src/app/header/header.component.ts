import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user: User | null = null
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.user = this.authService.getUser()
  }
  logout() {
    this.authService.logout()
    this.user = null
  }
}
