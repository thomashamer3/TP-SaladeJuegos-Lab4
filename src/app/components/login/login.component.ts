import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  email: string = '';
  password: string = '';
  user: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestore: Firestore
  ) {}

  autoCompletar() {
    this.email = 'thomashamer@gmail.com';
    this.password = '123456';
  }

  login(): void {
    this.authService
      .login(this.email, this.password)
      .then((response) => {
        let col = collection(this.firestore, 'usuarios');
        addDoc(col, { fecha: new Date(), user: this.email });
        this.authService.bool = true;
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
        this.user = true;
      });
  }
}
