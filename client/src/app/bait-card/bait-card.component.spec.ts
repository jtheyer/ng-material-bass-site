import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitCardComponent } from './bait-card.component';

describe('BaitCardComponent', () => {
  let component: BaitCardComponent;
  let fixture: ComponentFixture<BaitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
