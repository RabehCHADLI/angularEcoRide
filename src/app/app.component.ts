import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { User } from './user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'EcoRide';
  user: User | null = null

  constructor(private authService: AuthService) { }


  ngOnInit() {
    this.user = this.authService.getUser()

  }

  logout() {
    this.authService.logout()
    this.user = null
  }
}
