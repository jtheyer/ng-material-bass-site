import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerContentComponent } from './summer-content.component';

describe('SummerContentComponent', () => {
  let component: SummerContentComponent;
  let fixture: ComponentFixture<SummerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
