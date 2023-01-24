import { Component, OnInit } from '@angular/core';
import { BaitsService } from '../baits.service';

@Component({
  selector: 'fall-content',
  templateUrl: './fall-content.component.html',
  styleUrls: ['./fall-content.component.scss']
})
export class FallContentComponent implements OnInit {
  baits: any[];

  constructor(private baitsService: BaitsService) {
    this.baits = [];
  }

  ngOnInit() {
    this.baits = this.baitsService.getBaitsBySeason('fall');
  }
  
}
