import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [ AppComponent, NavMenuComponent, HomeComponent, MenuComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}