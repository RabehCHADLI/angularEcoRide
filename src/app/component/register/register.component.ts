import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  async submitForm() {
    let datafetch = {
      "email": this.registerForm.value.email,
      "lastname": this.registerForm.value.firstname,
      "firstname": this.registerForm.value.lastname,
      "password": this.registerForm.value.password

    }
    let rep = await fetch('http://localhost:8000/api/register', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'post',
      body: JSON.stringify(datafetch)
    });
    let data = await rep.json();
    console.log(data)
  }
}
