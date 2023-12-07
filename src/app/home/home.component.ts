import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animationItem: AnimationItem = {} as AnimationItem; // Initialize with an empty object

  options: AnimationOptions = {
    path: '../../../assets/Lottie Lego.json',
    autoplay: false,
  };

  constructor() {}

  ngOnInit(): void {}

  // This is the component function that binds to the animationCreated event from the package
  onAnimate(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    console.log(animationItem);
  }

  // Function to play the animation when the mouse is over
  onMouseOver(): void {
    if (this.animationItem) {
      this.animationItem.play();
    }
  }

  // Function to pause the animation when the mouse leaves
  onMouseLeave(): void {
    if (this.animationItem) {
      this.animationItem.stop();
    }
  }
}
