import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "menu", component: MenuComponent},
    { path: "**", redirectTo: ""}, //default
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: [AppComponent],
})
export class AppRoutingModule { }