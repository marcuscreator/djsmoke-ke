import { Component } from '@angular/core';
import { CeremoniesCardsComponent } from '../ceremonies-cards/ceremonies-cards.component';

@Component({
  selector: 'app-ceremonies-page',
  standalone: true,
  imports: [CeremoniesCardsComponent],
  templateUrl: './ceremonies-page.component.html',
  styleUrl: './ceremonies-page.component.css',
})
export class CeremoniesPageComponent {
}
