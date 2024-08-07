import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { User } from './user';
import { AuthService } from './auth.service';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, HeaderComponent],
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
