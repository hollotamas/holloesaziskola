import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertComponent } from './core/alert/alert.component';
import { AlertService } from './shared/alert.service';
import { MenuComponent } from './core/menu/menu.component';
import { FejlecComponent } from './core/fejlec/fejlec.component';
import { LablecComponent } from './core/lablec/lablec.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    MenuComponent,
    FejlecComponent,
    LablecComponent,
    ...AppRoutingModule.routTableComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
