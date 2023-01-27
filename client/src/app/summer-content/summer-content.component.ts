import { Component, OnInit, ViewChild } from '@angular/core';
import { BaitsService } from '../baits.service';

@Component({
  selector: 'summer-content',
  templateUrl: './summer-content.component.html',
  styleUrls: ['./summer-content.component.scss']
})
export class SummerContentComponent implements OnInit {
  baits!: any[];
  isScrolling = false;

  constructor(
    private baitsService: BaitsService) {

  };

  ngOnInit(): void {
    this.baits = this.baitsService.getBaitsBySeason('summer');
  }
  

  onTouchStart(event: TouchEvent) {
    event.stopPropagation();
    this.isScrolling = false;
  }

  onTouchMove(event: TouchEvent) {
    event.stopPropagation();
    this.isScrolling = true;
  }

  onTouchEnd(event: TouchEvent) {
    event.stopPropagation();
    this.isScrolling = false;
  }

}
