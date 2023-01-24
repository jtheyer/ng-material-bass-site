import { Component, OnInit } from '@angular/core';
import { BaitsService } from '../baits.service';

@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit{
  baits: any[];

  constructor(private baitsService: BaitsService) {
    this.baits = [];
  }

  ngOnInit() {
    this.baits = this.baitsService.getBaitsBySeason('home');
  }
}
