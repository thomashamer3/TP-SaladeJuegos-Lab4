import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterLink, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'tpsaladejuegoslab4hamer-8ec28',
          appId: '1:161357011843:web:6206116c3f199ab29a34b6',
          storageBucket: 'tpsaladejuegoslab4hamer-8ec28.appspot.com',
          apiKey: 'AIzaSyBX4NShktwKSfIm_B1NRqP-WNHP5ihXS3E',
          authDomain: 'tpsaladejuegoslab4hamer-8ec28.firebaseapp.com',
          messagingSenderId: '161357011843',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'tpsaladejuegoslab4hamer-8ec28',
          appId: '1:161357011843:web:6206116c3f199ab29a34b6',
          storageBucket: 'tpsaladejuegoslab4hamer-8ec28.appspot.com',
          apiKey: 'AIzaSyBX4NShktwKSfIm_B1NRqP-WNHP5ihXS3E',
          authDomain: 'tpsaladejuegoslab4hamer-8ec28.firebaseapp.com',
          messagingSenderId: '161357011843',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())), provideAnimationsAsync(),
  ],
};
