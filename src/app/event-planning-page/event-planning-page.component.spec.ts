import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPlanningPageComponent } from './event-planning-page.component';

describe('EventPlanningPageComponent', () => {
  let component: EventPlanningPageComponent;
  let fixture: ComponentFixture<EventPlanningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPlanningPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPlanningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
