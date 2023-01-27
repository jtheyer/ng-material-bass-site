import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaitsService } from '../baits.service';

@Component({
  selector: 'fall-content',
  templateUrl: './fall-content.component.html',
  styleUrls: ['./fall-content.component.scss']
})
export class FallContentComponent implements OnInit {
  baits: any[];
  isScrolling: boolean = false;

  constructor(private baitsService: BaitsService, 
    private el: ElementRef) {
    this.baits = [];
  }

  ngOnInit() {
    this.baits = this.baitsService.getBaitsBySeason('summer');
  }


  @ViewChild('cw') cw?: HTMLElement;
  onSwipe(event: any, i: number) {
    console.log(event.direction);
    if (this.cw) {
      if (!this.isScrolling) {
        this.baits![i].isVisible = !this.baits![i].isVisible;
      }
      this.isScrolling = false;
    }
  }

  scrollVertically() {
    this.el.nativeElement.querySelector('#scroll-container').scrollBy({
      top: 100, // you can adjust the scroll amount here
      left: 0,
      behavior: 'smooth'
    });
  }

  onTouchStart(event: TouchEvent) {
    // event.stopPropagation();
    this.isScrolling = false;
  }

  onTouchMove(event: TouchEvent) {
    // event.stopPropagation();
    this.isScrolling = true;
  }

  onTouchEnd(event: TouchEvent) {
    // event.stopPropagation();
    this.isScrolling = false;
  }
  
}
