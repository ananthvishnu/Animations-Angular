## Install Lottie
npm install lottie-web ngx-lottie

## in your app module
// Add these two
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Export this function
export function playerFactory(): any {  
  return import('lottie-web');
}


## declare
 // Add the module like so:    
    LottieModule.forRoot({ player: playerFactory }),


## export class
export class SplashScreenComponent implements OnInit {

  // This is the option that uses the package's AnimationOption interface  
  options: AnimationOptions = {    
    path: '/assets/lottie/piggy-bank.json'  
  };  

  constructor() { }  

  ngOnInit(): void {  }

  // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }
}

## use the HTML
<div class="lottie-animation mt-10">
  <ng-lottie
    [options]="options" 
    (animationCreated)="onAnimate($event)">
  </ng-lottie>
</div>

for more info: https://dev.to/riapacheco/adding-animated-illustrations-to-an-angular-app-with-lottie-ngx-lottie-4j0o