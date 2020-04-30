import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [    
  HomeComponent,
  AppComponent,
],
  imports: [
   
    BrowserModule,
  RouterModule.forRoot(
[ 
  {path: "", component: HomeComponent}
]

  )
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
