import { Component, OnInit } from '@angular/core';
import { BaitsService } from '../baits.service';

@Component({
  selector: 'summer-content',
  templateUrl: './summer-content.component.html',
  styleUrls: ['./summer-content.component.scss']
})
export class SummerContentComponent implements OnInit {
  baits: any[];

  constructor(private baitsService: BaitsService){
    this.baits = [];
  };

  ngOnInit(): void {
    this.baits = this.baitsService.getBaitsBySeason('summer');
  }

}
