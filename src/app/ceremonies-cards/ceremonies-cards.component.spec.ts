import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremoniesCardsComponent } from './ceremonies-cards.component';

describe('CeremoniesCardsComponent', () => {
  let component: CeremoniesCardsComponent;
  let fixture: ComponentFixture<CeremoniesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeremoniesCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremoniesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
