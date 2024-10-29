import { Component } from '@angular/core';
import { SoundSystemCardsComponent } from '../sound-system-cards/sound-system-cards.component';

@Component({
  selector: 'app-sound-system-page',
  standalone: true,
  imports: [SoundSystemCardsComponent],
  templateUrl: './sound-system-page.component.html',
  styleUrl: './sound-system-page.component.css'
})
export class SoundSystemPageComponent {

}
