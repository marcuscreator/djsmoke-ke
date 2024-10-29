import { Component } from '@angular/core';
import { EventPlanningCardsComponent } from '../event-planning-cards/event-planning-cards.component';

@Component({
  selector: 'app-event-planning-page',
  standalone: true,
  imports: [EventPlanningCardsComponent],
  templateUrl: './event-planning-page.component.html',
  styleUrl: './event-planning-page.component.css'
})
export class EventPlanningPageComponent {

}
