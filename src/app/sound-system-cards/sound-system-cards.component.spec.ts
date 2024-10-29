import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundSystemCardsComponent } from './sound-system-cards.component';

describe('SoundSystemCardsComponent', () => {
  let component: SoundSystemCardsComponent;
  let fixture: ComponentFixture<SoundSystemCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundSystemCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundSystemCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
