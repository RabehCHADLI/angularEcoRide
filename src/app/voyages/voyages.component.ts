import { Component } from '@angular/core';
import { CardVoyageComponent } from '../card-voyage/card-voyage.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voyages',
  standalone: true,
  imports: [CardVoyageComponent, CommonModule],
  template: `
    <app-card-voyage *ngFor="let voyage of data "><app-card-voyage/>
  `,
  styleUrl: './voyages.component.css'
})
export class VoyagesComponent {
  data = [];
  async fetchData() {
    let rep = await fetch('http://localhost:8000/api/allvoyage')
    let data = await rep.json()
    data = await this.data

  }
  ngOnInit() {
    this.fetchData()
  }
}
