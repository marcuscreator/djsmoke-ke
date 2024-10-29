import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutusSectionComponent } from '../aboutus-section/aboutus-section.component';
import { MainServicesComponent } from '../main-services/main-services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, AboutusSectionComponent, MainServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
