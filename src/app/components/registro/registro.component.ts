import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export default class RegistroComponent {
  email: string = '';
  password: string = '';
  mailUsado: boolean = false;
  contraseñaInvalida: boolean = false;
  mailInvalido: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private firestore: Firestore
  ) {}

  registro() {
    this.mailUsado = false;
    this.mailInvalido = false;
    this.contraseñaInvalida = false;

    this.authService
      .registro(this.email, this.password)
      .then((response) => {
        let col = collection(this.firestore, 'usuarios');
        addDoc(col, { fecha: new Date(), user: this.email });
        this.authService.bool = true;
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          this.mailUsado = true;
        } else if (error.code === 'auth/weak-password') {
          this.contraseñaInvalida = true;
        } else if (error.code === 'auth/invalid-email') {
          this.mailInvalido = true;
        }
      });
  }
}
