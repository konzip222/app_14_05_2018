import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DatabaseService } from './services/database.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery

import { ModalGalleryModule } from 'angular-modal-gallery';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { environment } from '../environments/environment';
import { ClockComponent } from './components/clock/clock.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    FormValidationComponent,
    ClockComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,    
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
  providers: [DatabaseService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
