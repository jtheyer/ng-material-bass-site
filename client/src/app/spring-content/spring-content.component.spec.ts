import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringContentComponent } from './spring-content.component';

describe('SpringContentComponent', () => {
  let component: SpringContentComponent;
  let fixture: ComponentFixture<SpringContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
