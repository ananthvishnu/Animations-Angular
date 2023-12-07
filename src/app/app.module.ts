import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Add these two
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { GSAPComponent } from './components/gsap/gsap.component';

// Export this function
export function playerFactory(): any {  
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GSAPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      // Add the module like so:    
      LottieModule.forRoot({ player: playerFactory }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
