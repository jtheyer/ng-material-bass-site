import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBaitsComponent } from './app-baits.component';

describe('AppBaitsComponent', () => {
  let component: AppBaitsComponent;
  let fixture: ComponentFixture<AppBaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBaitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
