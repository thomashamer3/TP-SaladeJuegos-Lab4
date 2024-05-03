import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  bool: boolean = false;

  constructor(private auth: Auth) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  registro(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logOut() {
    return signOut(this.auth);
  }
}
