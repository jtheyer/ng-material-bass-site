import { Component, OnInit} from '@angular/core';
import { BaitsService } from '../baits.service';

@Component({
  selector: 'spring-content',
  templateUrl: './spring-content.component.html',
  styleUrls: ['./spring-content.component.scss']
})
export class SpringContentComponent implements OnInit {
  baits!: any[];
  isScrolling = false;

  constructor(private baitsService: BaitsService) {};

  ngOnInit(): void {
    this.baits = this.baitsService.getSpringBaits();
  }

}
