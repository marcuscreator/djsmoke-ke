import { Component } from '@angular/core';
import { MixesCardsComponent } from '../mixes-cards/mixes-cards.component';

@Component({
  selector: 'app-mymusicpage',
  standalone: true,
  imports: [MixesCardsComponent],
  templateUrl: './mymusicpage.component.html',
  styleUrl: './mymusicpage.component.css'
})
export class MymusicpageComponent {

}
