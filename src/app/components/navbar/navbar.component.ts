import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,
    MatButtonModule,
    MatIconModule,
    CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private router: Router,
    public authService: AuthService
  ){}

  salir(){
    this.authService.logOut()
    .then(response =>{ 
      this.authService.bool = false;
      this.router.navigate(['/login']);
     })
    .catch(error => {console.log(error)})
  }
}
