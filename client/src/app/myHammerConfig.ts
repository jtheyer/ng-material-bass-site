import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
// import Hammer from 'hammerjs';

@Injectable()
export class HammerConfigBaitCard extends HammerGestureConfig {
  override = {
    swipe: {
      direction: Hammer.DIRECTION_HORIZONTAL
    }
  }
}


// VA appt: jan 26 @ 230pm 