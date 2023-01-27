import { Component, HostListener, ViewChild, ElementRef, Input } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// import { trigger, keyframes, animate, transition } from '@angular/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';


// export class MyHammerConfig extends HammerGestureConfig  {
//   overrides = <any>{
//     'swipe': { direction: Hammer.DIRECTION_ALL }
//   }
// }

@Component({
  selector: 'bait-card',
  templateUrl: './bait-card.component.html',
  styleUrls: ['./bait-card.component.scss'],
  // animations: [
  //   trigger('cardAnimator', [
  //     transition('* => wobble',//any state that transitions to wobble, 
  //       animate(1000, keyframes(kf.flip)//..will animate over 1000ms 
  //     )), 
  //   ])
  // ]
  animations: [
    [
      trigger('flipState', [
        state('active', style({
          transform: 'rotateY(179deg)'
        })),
        state('inactive', style({
          transform: 'rotateY(0)'
        })),
        transition('active => inactive', animate('500ms ease-out')),
        transition('inactive => active', animate('500ms ease-in'))
      ])
    ]
  ]
  
})
export class BaitCardComponent {
  // baits?: any[];
  @Input() bait!: any;
  @Input() i!: number
  show = false; //just use !flipSide below...
  isScrolling = false;
  animationState?: string;
  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }


  startAnimation(state: string){
    if (!this.animationState){
      this.animationState = state;
    }
  }

  resetAnimationState(){
    this.animationState = '';
  }

  @ViewChild('cw') cw?: ElementRef;
  // ngAfterViewInit() {
  //   if(this.cw){
  //     let hammer = new Hammer(this.cw.nativeElement);
  //     hammer.on('swipe', (ev) => {
  //       if(ev.direction === Hammer.DIRECTION_LEFT) {
  //         this.show = !this.show;
  //       } else if(ev.direction === Hammer.DIRECTION_RIGHT) {
  //         this.show = !this.show;
  //       }
  //     });
  //   }
  // }
  onSwipe(i: number) {
    console.log(`in bait card.. ${i}`);
    if (this.cw) {
      if(!this.isScrolling){
        this.bait.isVisible = !this.bait.isVisible;
      }
      this.isScrolling = false;
    }
  }
}