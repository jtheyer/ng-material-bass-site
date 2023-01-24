import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { BaitsService } from '../baits.service';



// export class MyHammerConfig extends HammerGestureConfig  {
//   overrides = <any>{
//     'swipe': { direction: Hammer.DIRECTION_ALL }
//   }
// }

@Component({
  selector: 'bait-card',
  templateUrl: './bait-card.component.html',
  styleUrls: ['./bait-card.component.scss']
})


export class BaitCardComponent {
  // @Input() bait: any;
  // baits?: any[];
  bait?: any;
  // showFront = true;
  // showBack = false;
  show = false; //just use !flipSide below...

  constructor(private baitsService: BaitsService){}

  @ViewChild('card') card?: ElementRef;
  ngAfterViewInit() {
    if(this.card){
      let hammer = new Hammer(this.card.nativeElement);
      hammer.on('swipe', (ev) => {
        if(ev.direction === Hammer.DIRECTION_LEFT) {
          this.show = !this.show;
        } else if(ev.direction === Hammer.DIRECTION_RIGHT) {
          this.show = !this.show;
        }
      });
    }
  }
}