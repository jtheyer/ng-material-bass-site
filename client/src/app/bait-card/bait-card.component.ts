import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'bait-card',
  templateUrl: './bait-card.component.html',
  styleUrls: ['./bait-card.component.scss'],
  animations: [
    [
      trigger('flipState', [
        state('active', style({
          transform: 'rotateY(179deg)'
        })),
        state('inactive', style({
          transform: 'rotateY(0)'
        })),
        transition('active => inactive', animate('500ms ease-out')),
        transition('inactive => active', animate('500ms ease-in'))
      ])
    ]
  ]
  
})
export class BaitCardComponent {
  @Input() bait!: any;
  @Input() i!: number

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
}