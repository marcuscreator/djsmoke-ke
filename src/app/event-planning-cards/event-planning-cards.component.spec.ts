import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPlanningCardsComponent } from './event-planning-cards.component';

describe('EventPlanningCardsComponent', () => {
  let component: EventPlanningCardsComponent;
  let fixture: ComponentFixture<EventPlanningCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPlanningCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPlanningCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
