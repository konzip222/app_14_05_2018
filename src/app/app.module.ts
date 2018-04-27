import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery

import { ModalGalleryModule } from 'angular-modal-gallery';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent        
      },
      {
        path: 'formValidation',
        component: FormValidationComponent        
      },
      {
        path: 'gallery',
        component: GalleryComponent        
      }
    ]),
    ModalGalleryModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuJgMRc84UWwMRlXpmR4ms9CECA3nG6Co'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
