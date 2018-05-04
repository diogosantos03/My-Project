import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RioTintoComponent } from './rio-tinto/rio-tinto.component';


@NgModule({
  declarations: [
    AppComponent,
    RioTintoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
