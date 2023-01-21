import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallContentComponent } from './fall-content.component';

describe('FallContentComponent', () => {
  let component: FallContentComponent;
  let fixture: ComponentFixture<FallContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
