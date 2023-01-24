import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaitsService } from '../baits.service';

@Component({
  selector: 'spring-content',
  templateUrl: './spring-content.component.html',
  styleUrls: ['./spring-content.component.scss']
})
export class SpringContentComponent implements OnInit {
  baits?: any[];
  isScrolling = false;


  constructor(
    private baitsService: BaitsService) {
      
  };
  
  ngOnInit(): void {
    this.baits = this.baitsService.getBaitsBySeason('spring');
  }

  @ViewChild('cw') cw?: HTMLElement;
  onSwipe(i: number) {
    if (this.cw) {
      if(!this.isScrolling){
        this.baits![i].isVisible = !this.baits![i].isVisible;
      }
      this.isScrolling = false;
    }
  }

onTouchMove() {
  // event.stopPropagation();
  this.isScrolling = true;
}
onTouchStart() {
  // event.stopPropagation();
  this.isScrolling = false;
}

  onTouchEnd(){
    this.isScrolling = false;
  }
}
