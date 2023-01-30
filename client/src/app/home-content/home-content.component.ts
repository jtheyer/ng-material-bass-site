import { Component, OnInit } from '@angular/core';
import { BaitsService } from '../baits.service';

@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit{
  hotBaits!: any[];
  allSeasonBaits!: any[];

  constructor(private baitsService: BaitsService) {}

  ngOnInit() {
    // this.baits = this.baitsService.getBaitsBySeason('home');
    this.hotBaits = this.baitsService.getHomeBaits();
    this.allSeasonBaits = this.baitsService.getAllSeasonBaits();
  }
}
