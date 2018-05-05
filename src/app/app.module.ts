import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RioTintoComponent } from './rio-tinto/rio-tinto.component';
import { AuditorService } from './auditor.service';


@NgModule({
  declarations: [
    AppComponent,
    RioTintoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
