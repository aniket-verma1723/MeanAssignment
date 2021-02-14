import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuContainerComponent } from './menu-container/menu-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    MenuContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
