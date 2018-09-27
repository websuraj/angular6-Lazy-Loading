import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "parent", loadChildren: './parent/parent.module#ParentModule'}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
