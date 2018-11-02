// import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';


// registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
