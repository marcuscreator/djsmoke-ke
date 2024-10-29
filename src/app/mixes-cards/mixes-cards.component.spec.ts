import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixesCardsComponent } from './mixes-cards.component';

describe('MixesCardsComponent', () => {
  let component: MixesCardsComponent;
  let fixture: ComponentFixture<MixesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixesCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
