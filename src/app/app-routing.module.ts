import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GSAPComponent } from './components/gsap/gsap.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'gsap',component:GSAPComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
